import { FC } from 'react';
import Image from 'next/image';

const Profile: FC = () => {
	return (
		<>
			<div className="flex flex-wrap items-center justify-center md:flex-row flex-col lg:text-7xl font-bold text-slate-500">
				<Image
					src="/icon.jpeg"
					width={120}
					height={120}
					className="rounded-full md:mb-0 mb-3 md:mr-5 h-max"
					alt="illustration"
				/>
				<div className="flex justify-center items-center md:items-start flex-col">
					<span className="dark:text-gray-300 font-extrabold text-6xl lg:text-8xl md:drop-shadow-none drop-shadow-lg">Ｉｘｙ</span>
					<span className="mt-3 items-center w-fit text-xl text-slate-500 dark:text-gray-300 md:ml-6 md:drop-shadow-none drop-shadow-lg">いくしー</span>
				</div>
			</div>
		</>
	);
};

export default Profile;
