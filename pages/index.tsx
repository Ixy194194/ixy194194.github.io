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
        {/* <div className="absolute flex -rotate-12 gap-5"> */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-7">
          <ImageCard src="/dummy.jpg" />
          <ImageCard src="/dummy.jpg" />
          <ImageCard src="/dummy.jpg" />
          <ImageCard src="/dummy.jpg" />
          <ImageCard src="/dummy.jpg" />
          <ImageCard src="/dummy.jpg" />
          <ImageCard src="/dummy.jpg" />
          <ImageCard src="/dummy.jpg" />
          <ImageCard src="/dummy.jpg" />
          <ImageCard src="/dummy.jpg" />
          <ImageCard src="/dummy.jpg" />
          <ImageCard src="/dummy.jpg" />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
