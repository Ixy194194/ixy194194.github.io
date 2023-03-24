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
        <div className="absolute flex -rotate-12 gap-5">
          <div className="flex flex-col gap-6">
            <ImageCard src="/dummy.png" />
            <ImageCard src="/dummy.png" />
            <ImageCard src="/dummy.png" />
            <ImageCard src="/dummy.png" />
            <ImageCard src="/dummy.png" />
          </div>
          <div className="flex flex-col gap-6">
            <ImageCard src="/dummy.png" />
            <ImageCard src="/dummy.png" />
            <ImageCard src="/dummy.png" />
            <ImageCard src="/dummy.png" />
            <ImageCard src="/dummy.png" />
          </div>
        </div>
      </div>
    </>
  );
}
