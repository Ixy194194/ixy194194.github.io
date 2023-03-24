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
          Ｉｘｙ（いくしー）
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 z-10">
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
        </div>

        {/*SNSリンク*/}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-slate-50 z-10">
            <div className="flex justify-center items-center h-full">
                <a href="https://twitter.com/Ixy" target="_blank" rel="noopener noreferrer" className="ml-4">Twitter</a>
                <a href="https://www.instagram.com/ixy__194/?hl=ja" target="_blank" rel="noopener noreferrer" className="ml-4">Instagram</a>
                <a href="https://www.youtube.com/@ixy" target="_blank" rel="noopener noreferrer" className="ml-4">YouTube</a>
                <a href="https://ixy.fanbox.cc/" target="_blank" rel="noopener noreferrer" className="ml-4">fanbox</a>
                <a href="https://ci-en.dlsite.com/creator/5868" target="_blank" rel="noopener noreferrer" className="ml-4">Ci-en</a>
            </div>
        </div>
      </div>
    </>
  );
}
