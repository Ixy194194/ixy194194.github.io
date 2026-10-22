# イラストレーター Ixy さんのウェブサイト

Ixy さんの作品・プロフィール・グッズ・問い合わせを掲載するサイトです。Next.js の Pages Router と静的 export を使用し、問い合わせは Cloudflare Pages Functions で Turnstile を検証して Mailgun へ送信します。

## 開発環境

Node.js 24 LTS と npm を使用します。`.nvmrc` は24系です。

```sh
nvm install
nvm use
npm ci
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。`npm run dev` は Next の画面開発用です。問い合わせ API を含むローカル確認は `npm run preview` を使用します。

## コマンド

| コマンド | 用途 |
| --- | --- |
| `npm run dev` | Webpack で Next の開発サーバーを起動 |
| `npm run build` | 静的サイトを `out/` へ生成 |
| `npm run start` | 生成済み `out/` と Pages Functions を Wrangler で起動 |
| `npm run preview` | build 後にローカルの Pages 環境を起動 |
| `npm run typecheck` | TypeScript 7 で型検査 |
| `npm run lint` / `lint:fix` | ESLint の検査 / 自動修正 |
| `npm run test:ci` | API・メニューのテストを一度実行（外部通信は mock） |
| `npm run test` | Jest の watch モード |
| `npm run format` | Prettier でコード・JSON を整形 |
| `npm run deploy` | build 後に Cloudflare Pages へ公開 |

## 構成

- `pages/`: `/`、`/illustrations/`、`/goods/`、`/contact/` のルートと共通 App/Document。
- `components/core/`: ヘッダー・フッター・SEO・スプラッシュ。
- `components/pages/`: 各画面の UI。作品のデータは `illustrations/Illustrations.tsx` の配列。
- `styles/` と各 `*.module.scss`: 共通スタイルと画面別の Sass。
- `public/`: 画像・フォントなどの公開素材。
- `functions/api/contact.ts`: 問い合わせ受付。
- `tests/`: 更新に伴う互換性と API の回帰テスト。

## 問い合わせの環境変数

Next の画面に `NEXT_PUBLIC_TURNSTILE_SITE_KEY`、Pages Functions に `TURNSTILE_SECRET_KEY`、`MAILGUN_APIKEY`、`MAILGUN_DOMAIN`、`NOTIFY_EMAIL` が必要です。実際の値は環境ごとに設定してください。テストは架空の値と mock を使用し、メールを実送信しません。

## 依存の互換性

2026-10-23に最新安定版へ更新しました。ESLint 10 を採用しています。Next 16.4 の互換アダプターを使う構成で、旧 peer 宣言が残る React / import / JSX a11y の3プラグインに scoped override を設定しています。lint の実行で互換性を検証しています。TypeScript 7 の型検査と、Next/ESLint 向け TypeScript 6 の compiler API を Microsoft の公式 alias 構成で併用します。テストの TS/TSX 変換は `next/jest` を使います。

全依存の audit に残る `braces` 由来の指摘は修正版未公開です。`npm audit --omit=dev` で本番依存の状態を確認できます。

## 素材と開発ルール

サイト内の画像の著作権は Ixy 先生に帰属します。無断利用を禁じます。画像・デザイン・レイアウトを変更するときは PC とスマートフォンの両方で確認してください。開発手順は [CONTRIBUTING.md](CONTRIBUTING.md) も参照してください。
