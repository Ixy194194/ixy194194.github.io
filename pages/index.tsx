import Head from 'next/head';
import ImageBoard from '../components/imagecard/ImageBoard';
import SnsLink from '../components/SnsLinks';
import Mailto from '../components/MailTo';
import Profile from '../components/profile/Profile';
import CommonMeta from '../components/CommonMeta';

export default function Home() {
	return (
		<>
			<CommonMeta></CommonMeta>
			<div className="min-h-screen bg-slate-50 dark:bg-zinc-900">
        <div className="flex justify-center items-center md:bg-gradient-to-r md:from-slate-50 md:dark:from-zinc-900 md:from-10% fixed w-full h-screen z-20">
          <div className="flex w-full md:mx-32 md:justify-start justify-center">
  				  <Profile></Profile>
          </div>
        </div>
				<ImageBoard></ImageBoard>
				<SnsLink></SnsLink>
				<Mailto></Mailto>
			</div>
		</>
	);
}
