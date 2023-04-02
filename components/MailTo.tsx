import { FC, useState, useEffect } from 'react';
import MailToImage from '../public/mail-address.svg';

const MailTo: FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)
		useEffect(() => {
		setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
	}, [])

	function getIconFill() {
		return isDarkMode ? '#ffffff' : '#000000'
	}
	return (
		<>
			<div className="fixed bottom-0 left-0 w-full h-15 bg-slate-200 z-10 dark:bg-zinc-800">
				<div className="flex justify-end items-end dark:text-gray-100">連絡先は下記</div>
				<div className="flex justify-end items-end">
					<MailToImage
						width={160}
						height={50}
						fill={getIconFill()}
					/>
				</div>
			</div>
		</>
	);
};

export default MailTo;

