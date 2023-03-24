import Head from 'next/head';
import ImageCard from '../components/ImageCard';

const images = [
  '/001.jpg',
  '/002.jpg',
  '/003.jpg',
  '/004.jpg',
  '/005.jpg',
  '/006.jpg',
  '/007.jpg',
  '/008.jpg',
  '/009.jpg',
  '/010.jpg',
  '/011.jpg',
  '/012.jpg',
];

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
          {images.map((image, index) => (
            <ImageCard src={image} width={180} height={180} key={index} />
          ))}
        </div>

        {/*SNSリンク*/}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-white/10 backdrop-blur-md shadow-[inset_0_32px_32px_-32px_rgba(255,255,255,0.4)] shadow-white z-10">
          <div className="flex justify-center items-center h-full space-x-4">
            <a href="https://twitter.com/Ixy" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a
              href="https://www.instagram.com/ixy__194/?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a href="https://www.youtube.com/@ixy" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            <a href="https://ixy.fanbox.cc/" target="_blank" rel="noopener noreferrer">
              fanbox
            </a>
            <a
              href="https://ci-en.dlsite.com/creator/5868"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ci-en
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
