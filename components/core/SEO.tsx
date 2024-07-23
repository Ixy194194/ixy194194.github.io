import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  ogImage?: string;
  url?: string;
}

const SEOComponent: React.FC<SEOProps> = ({ title, description, ogImage, url }) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta name="twitter:card" content="summary_large_image" />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      <meta name="twitter:site" content="@Ixy" />
      <meta property="og:locale" content="ja-JP" />
      <link rel="icon" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" href="/images/apple-icon-180x180.png" />
    </Head>
  );
};

export default SEOComponent;
