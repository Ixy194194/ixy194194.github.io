import { FC, ReactNode } from 'react';
import Link from 'next/link';

interface SnsLinkProps {
	href: string;
	children: ReactNode;
}

const SnsLink: FC<SnsLinkProps> = ({ href, children }) => {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="dark:text-gray-100 px-2 py-1 rounded-md duration-100 ease-out hover:bg-slate-400/10 dark:hover:bg-white/10 active:scale-95"
		>
			{children}
		</Link>
	);
};

export default SnsLink;
