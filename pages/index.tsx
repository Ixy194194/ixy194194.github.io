import Head from 'next/head';
import ImageBoard from '../components/imagecard/ImageBoard';
import SnsLink from '../components/SnsLinks';
import YoutubeLink from '../components/Youtube';
import Profile from '../components/profile/Profile';
import CommonMeta from '../components/CommonMeta'

export default function Home() {
    return (
        <>
            <CommonMeta></CommonMeta>
            <div className="min-h-screen bg-slate-50">
                <Profile></Profile>
                <ImageBoard></ImageBoard>
                <SnsLink></SnsLink>
                <YoutubeLink></YoutubeLink>
            </div>
        </>
    );
}
