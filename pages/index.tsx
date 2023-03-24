import Head from 'next/head';
import ImageCard from '../components/ImageCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>いくしー</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-slate-50">
        <ImageCard src="/dummy.png" />
        <ImageCard src="/dummy.png" />
        <ImageCard src="/dummy.png" />
        <ImageCard src="/dummy.png" />
        <ImageCard src="/dummy.png" />
      </div>
    </>
  );
}
