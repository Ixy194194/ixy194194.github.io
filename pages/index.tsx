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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12">
          <ImageCard src="/dummy.jpg" width={180} height={300} />
          <ImageCard src="/dummy.jpg" width={180} height={500} />
          <ImageCard src="/dummy.jpg" width={180} height={300} />
          <ImageCard src="/dummy.jpg" width={180} height={200} />
          <ImageCard src="/dummy.jpg" width={180} height={300} />
          <ImageCard src="/dummy.jpg" width={180} height={400} />
          <ImageCard src="/dummy.jpg" width={180} height={300} />
          <ImageCard src="/dummy.jpg" width={180} height={600} />
          <ImageCard src="/dummy.jpg" width={180} height={300} />
          <ImageCard src="/dummy.jpg" width={180} height={200} />
          <ImageCard src="/dummy.jpg" width={180} height={200} />
          <ImageCard src="/dummy.jpg" width={180} height={100} />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
