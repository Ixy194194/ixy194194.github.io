/** @jest-environment node */
import { onRequest } from '../functions/api/contact';

const env = {
  TURNSTILE_SECRET_KEY: 'test-secret',
  MAILGUN_APIKEY: 'test-api-key',
  NOTIFY_EMAIL: 'test@example.com',
  MAILGUN_DOMAIN: 'example.com',
};

function context(method = 'POST', overrides: Record<string, string> = {}) {
  const body = new FormData();
  const values = {
    name: 'テスト',
    email: 'visitor@example.com',
    subject: '依頼',
    message: '本文',
    'cf-turnstile-response': 'test-token',
    ...overrides,
  };
  for (const [key, value] of Object.entries(values)) body.append(key, value);
  return {
    request: new Request('https://example.com/api/contact', {
      method,
      ...(method === 'POST' ? { body } : {}),
    }),
    env,
  } as unknown as Parameters<typeof onRequest>[0];
}

describe('問い合わせ API', () => {
  let fetchMock: jest.SpiedFunction<typeof fetch>;

  beforeEach(() => {
    fetchMock = jest.spyOn(globalThis, 'fetch');
    // 未設定の外部呼び出しも実通信させない。
    fetchMock.mockRejectedValue(new Error('Unexpected external request'));
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  afterEach(() => jest.restoreAllMocks());

  it('GET を拒否し外部通信しない', async () => {
    const response = await onRequest(context('GET'));
    expect(response.status).toBe(405);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('Zod 4 の入力エラーを従来の errors フィールドで返す', async () => {
    const response = await onRequest(context('POST', { email: 'invalid', message: '' }));
    expect(response.status).toBe(400);
    const result = await response.json();
    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ path: ['email'] }),
        expect.objectContaining({ path: ['message'], message: 'メッセージは必須です' }),
      ]),
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('Turnstile が失敗した場合はメールを送らない', async () => {
    fetchMock.mockResolvedValueOnce(Response.json({ success: false }));
    const response = await onRequest(context());
    expect(response.status).toBe(400);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('検証済みの問い合わせを通知メールへ変換する', async () => {
    fetchMock.mockResolvedValueOnce(Response.json({ success: true }));
    fetchMock.mockResolvedValueOnce(Response.json({ id: 'test-mail' }));
    const response = await onRequest(context());
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ success: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[0][0]).toBe(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    );
    const [url, options] = fetchMock.mock.calls[1];
    expect(url).toBe('https://api.mailgun.net/v3/example.com/messages');
    const mail = options?.body as FormData;
    expect(mail.get('to')).toBe('test@example.com');
    expect(mail.get('text')).toContain('visitor@example.com');
    expect(mail.get('text')).toContain('本文');
  });

  it('Mailgun エラーを成功として扱わない', async () => {
    fetchMock.mockResolvedValueOnce(Response.json({ success: true }));
    fetchMock.mockResolvedValueOnce(new Response('failed', { status: 500 }));
    expect((await onRequest(context())).status).toBe(500);
  });

  it('検証サービスの通信例外を500として返す', async () => {
    expect((await onRequest(context())).status).toBe(500);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
