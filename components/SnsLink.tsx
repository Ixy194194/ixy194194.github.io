import { FC, ReactNode } from 'react';

interface SnsLinkProps {
  href: string;
  children: ReactNode;
}

const SnsLink: FC<SnsLinkProps> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="ml-4">
      {children}
    </a>
  );
};

export default SnsLink;
