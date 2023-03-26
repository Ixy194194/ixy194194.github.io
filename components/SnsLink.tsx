import { FC, ReactNode } from 'react';

interface SnsLinkProps {
  href: string;
  children: ReactNode;
}

const SnsLink: FC<SnsLinkProps> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default SnsLink;
