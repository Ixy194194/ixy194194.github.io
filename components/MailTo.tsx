import { FC, useEffect } from 'react';
import Image from 'next/image';

const MailTo: FC = () => {
	return (
		<>
			<div className="fixed bottom-0 left-0 w-full h-15 bg-slate-200 z-10 dark:bg-zinc-800">
				<div className="flex justify-end items-end dark:text-gray-100">連絡先は下記</div>
				<div className="flex justify-end items-end">
					<Image
						src="/normal-theme-mailto.png"
						width={160}
						height={150}
						className="bg-slate-200"
						alt="メールアドレス"
					/>
				</div>
			</div>
		</>
	);
};

export default MailTo;

