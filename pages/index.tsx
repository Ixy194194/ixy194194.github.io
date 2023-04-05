import Head from 'next/head';
import ImageBoard from '../components/imagecard/ImageBoard';
import SnsLink from '../components/SnsLinks';
import Mailto from '../components/MailTo';
import Profile from '../components/profile/Profile';
import CommonMeta from '../components/CommonMeta';

export default function Home() {
	return (
		<>
			<CommonMeta />
			<div className="min-h-screen bg-slate-50 dark:bg-zinc-900">
				<Profile />
				<ImageBoard />
				<SnsLink />
				{/* <Mailto /> */}
			</div>
		</>
	);
}
