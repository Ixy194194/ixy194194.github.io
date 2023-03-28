import Head from 'next/head';
import ImageBoard from '../components/imagecard/ImageBoard';
import SnsLink from '../components/SnsLinks';
import Profile from '../components/profile/Profile';
import CommonMeta from '../components/CommonMeta';
import { useEffect,useState } from "react";


export default function Home() {
    const [showSplash, setShowSplash] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setShowSplash(false);
        }, 2700);
    
        return () => {
          clearTimeout(timer);
        };
      }, []);
    
    return (
        <>
            <CommonMeta></CommonMeta>
            {showSplash && (
                <div
                id="splash"
                className="fixed w-full h-full bg-white flex justify-center items-center top-0 left-0 z-50"
                style={{ transition: 'opacity 1s ease-out', opacity: showSplash ? 1 : 0 }}
                >
                <div id="splash_logo" className="justify-self-center">
                    <img src="/ixylogo.png" alt="ixy" className="fadeUp w-8/12" />
                </div>
                </div>
            )}

            <main>
                <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 container">
                    <Profile></Profile>
                    <ImageBoard></ImageBoard>
                    <SnsLink></SnsLink>
                </div>
            </main>
        </>
    );
}
