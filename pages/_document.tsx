import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="ja">
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<Head />
			<body>
				<div className="grid-background">
					<Main />
				</div>
				<NextScript />
			</body>
		</Html>
	);
}
