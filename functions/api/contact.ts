import { z } from 'zod';
import { EventContext } from '@cloudflare/workers-types';

// 環境変数の型を定義
interface Env {
  TURNSTILE_SECRET_KEY: string;
  MAILGUN_APIKEY: string;
  NOTIFY_EMAIL: string;
  MAILGUN_DOMAIN: string;
}

const schema = z.object({
  name: z.string().min(1, '名前は必須です'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  subject: z.string().optional(),
  message: z.string().min(1, 'メッセージは必須です'),
  'cf-turnstile-response': z.string().min(1, 'Turnstileトークンは必須です'),
});

// EventContextの型を更新
export async function onRequest(context: EventContext<Env, '', {}>) {
  if (context.request.method !== 'POST') {
    return new Response('メソッドが許可されていません', { status: 405 });
  }

  try {
    const requestFormData = await context.request.formData();
    const data = Object.fromEntries(requestFormData);
    const validatedData = schema.parse(data);

    // Turnstileの検証
    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: context.env.TURNSTILE_SECRET_KEY,
          response: validatedData['cf-turnstile-response'],
          remoteip: context.request.headers.get('X-Forwarded-For'),
        }),
      }
    );

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
      return new Response('Turnstile認証に失敗しました', { status: 400 });
    }

    // メール送信の処理
    const mailgunDomain = context.env.MAILGUN_DOMAIN;
    const mailgunApiKey = context.env.MAILGUN_APIKEY;
    const notifyEmail = context.env.NOTIFY_EMAIL;

    const mailgunEndpoint = `https://api.mailgun.net/v3/${mailgunDomain}/messages`;

    const emailBody = `
    Webサイトで新しい問い合わせがありました。
    ※このメールは送信専用です。

    お名前: ${validatedData.name}
    メールアドレス: ${validatedData.email}
    件名: ${validatedData.subject || '(件名なし)'}
    お問い合わせ内容: ${validatedData.message}
    `;

    const formData = new FormData();
    formData.append('from', `Contact Form <noreply@${mailgunDomain}>`);
    formData.append('to', notifyEmail);
    formData.append('subject', '新しい問い合わせがありました');
    formData.append('text', emailBody);

    try {
      const mailgunResponse = await fetch(mailgunEndpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${btoa(`api:${mailgunApiKey}`)}`,
        },
        body: formData,
      });

      if (!mailgunResponse.ok) {
        throw new Error('メール送信に失敗しました');
      }

      console.log('メール送信成功');
    } catch (error) {
      console.error('メール送信エラー:', error);
      return new Response('メール送信に失敗しました', { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ errors: error.errors }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response('内部サーバーエラー', { status: 500 });
  }
}