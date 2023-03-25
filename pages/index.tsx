import Head from 'next/head';
import ImageBoard from '../components/imagecard/ImageBoard';
import SnsLink from '../components/SnsLinks';
import Profile from '../components/profile/Profile';

export default function Home() {
    return (
        <>
            <Head>
                <title>いくしー</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="min-h-screen bg-slate-50">
                <Profile></Profile>
                <ImageBoard></ImageBoard>
                <SnsLink></SnsLink>
            </div>
        </>
    );
}
