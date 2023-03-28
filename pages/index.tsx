import Head from 'next/head';
import ImageBoard from '../components/imagecard/ImageBoard';
import SnsLink from '../components/SnsLinks';
import Profile from '../components/profile/Profile';
import CommonMeta from '../components/CommonMeta';
import { useEffect } from "react";
import jQuery from "jquery"


export default function Home() {
    useEffect(() => {
        jQuery(globalThis.window).on('load', function() {
            jQuery("#splash_logo").delay(1200).fadeOut('slow');
            jQuery("#splash").delay(1500).fadeOut('slow');
        });
    },[]);
    
    return (
        <>
            <CommonMeta></CommonMeta>
            <div id="splash">
                <div id="splash_logo" className='justify-self-center'>
                    <img src="/ixylogo.png" alt="ixy" className="fadeUp w-8/12"/>
                </div>
            </div>

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
