import { FC, ReactNode } from 'react';

interface SnsLinkProps {
	href: string;
	children: ReactNode;
}

const SnsLink: FC<SnsLinkProps> = ({ href, children }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="dark:text-gray-100 px-2 py-1 rounded-md duration-100 ease-out hover:bg-white/10 active:scale-95"
		>
			{children}
		</a>
	);
};

export default SnsLink;
