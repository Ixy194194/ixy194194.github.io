import Image from 'next/image';
import { FC } from 'react';

interface ImageCardProps {
  src: string;
  width: number;
  height: number;
}

const ImageCard: FC<ImageCardProps> = ({ width, height, src }) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      className="shadow-md rounded-xl object-cover"
      alt="TEST"
    />
  );
};

export default ImageCard;
