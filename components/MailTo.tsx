import { FC, useState, useEffect } from 'react';
import MailToImage from '../public/mail-address.svg';
import Link from 'next/link';

const MailTo: FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	useEffect(() => {
		setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
	}, []);

	function getIconFill() {
		return isDarkMode ? '#ffffff' : '#000000';
	}
	return (
		<div>
			<div className="bottom-0 left-0 w-full h-15 z-10 dark:bg-zinc-800 bg-white/30 backdrop-blur-lg border-t ">
				<div className="flex justify-center items-center dark:text-gray-100">連絡先は下記</div>
				<div className="flex justify-center items-center">
					<Link href="mailto:ixyinfo333@gmail.com">
						<MailToImage width={160} height={50} fill={getIconFill()} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MailTo;
