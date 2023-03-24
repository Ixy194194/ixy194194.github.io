import Image from 'next/image';
import { FC } from 'react';

interface ImageCardProps {
  src: string;
}

const ImageCard: FC<ImageCardProps> = ({ src }) => {
  return <Image src={src} width={200} height={500} className="shadow-md rounded-xl" />;
};

export default ImageCard;
