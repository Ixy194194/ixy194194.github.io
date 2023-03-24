import Image from 'next/image';
import { FC } from 'react';

interface ImageCardProps {
  src: string;
}

const ImageCard: FC<ImageCardProps> = ({ src }) => {
  return (
    <Image
      src={src}
      width={300}
      height={400}
      className="shadow-md rounded-xl object-cover w-[300px] h-[400px]"
      alt="TEST"
    />
  );
};

export default ImageCard;
