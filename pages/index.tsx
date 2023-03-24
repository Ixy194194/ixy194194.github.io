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
        <div className="absolute flex justify-center items-center w-screen h-screen text-8xl font-bold text-slate-500 z-10">
          <div>
            Ｉｘｙ
            <span className="text-5xl">いくしー</span>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 z-10 opacity-25 max-h-screen overflow-hidden">
          <ImageCard src="/001.jpg" width={180} height={300} />
          <ImageCard src="/002.jpg" width={180} height={500} />
          <ImageCard src="/003.jpg" width={180} height={300} />
          <ImageCard src="/004.jpg" width={180} height={200} />
          <ImageCard src="/005.jpg" width={180} height={300} />
          <ImageCard src="/006.jpg" width={180} height={400} />
          <ImageCard src="/007.jpg" width={180} height={300} />
          <ImageCard src="/008.jpg" width={180} height={600} />
          <ImageCard src="/009.jpg" width={180} height={300} />
          <ImageCard src="/010.jpg" width={180} height={200} />
          <ImageCard src="/011.jpg" width={180} height={200} />
          <ImageCard src="/012.jpg" width={180} height={100} />
          <ImageCard src="/001.jpg" width={180} height={300} />
          <ImageCard src="/002.jpg" width={180} height={500} />
          <ImageCard src="/003.jpg" width={180} height={300} />
          <ImageCard src="/004.jpg" width={180} height={200} />
          <ImageCard src="/005.jpg" width={180} height={300} />
          <ImageCard src="/006.jpg" width={180} height={400} />
          <ImageCard src="/007.jpg" width={180} height={300} />
          <ImageCard src="/008.jpg" width={180} height={600} />
          <ImageCard src="/009.jpg" width={180} height={300} />
          <ImageCard src="/010.jpg" width={180} height={200} />
          <ImageCard src="/011.jpg" width={180} height={200} />
          <ImageCard src="/012.jpg" width={180} height={100} />
        </div>

        {/*SNSリンク*/}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-white/10 backdrop-blur-md shadow-[inset_0_32px_32px_-32px_rgba(255,255,255,0.4)] shadow-white z-10">
          <div className="flex justify-center items-center h-full">
            <a
              href="https://twitter.com/Ixy"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/ixy__194/?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@ixy"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              YouTube
            </a>
            <a
              href="https://ixy.fanbox.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              fanbox
            </a>
            <a
              href="https://ci-en.dlsite.com/creator/5868"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              Ci-en
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
