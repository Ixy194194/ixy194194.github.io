import { FC } from 'react';
import SnsLink from './SnsLink';

const SnsLinks: FC = () => {
	return (
		<div className="fixed bottom-0 left-0 w-full h-20 bg-slate-200 z-10 dark:bg-zinc-800">
			<div className="flex flex-wrap justify-center items-center h-full dark:text-gray-100 sm:space-x-4">
				<SnsLink href="https://twitter.com/Ixy">Twitter</SnsLink>,
				<SnsLink href="https://www.instagram.com/ixy__194/?hl=ja">Instagram</SnsLink>,
				<SnsLink href="https://www.youtube.com/@ixy">YouTube</SnsLink>,
				<SnsLink href="https://ixy.fanbox.cc/">fanbox</SnsLink>,
				<SnsLink href="https://ci-en.dlsite.com/creator/5868">Ci-en</SnsLink>
			</div>
		</div>
	);
};

export default SnsLinks;
