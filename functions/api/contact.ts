import { z } from 'zod';
import { EventContext } from '@cloudflare/workers-types';

// 環境変数の型を定義
interface Env {
  TURNSTILE_SECRET_KEY: string;
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
    const formData = await context.request.formData();
    const data = Object.fromEntries(formData);
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

    // todo: ここでメール送信の処理を行います
    console.log(validatedData);

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