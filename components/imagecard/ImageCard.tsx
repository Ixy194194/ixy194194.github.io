import Image from 'next/image';
import { FC } from 'react';

export interface ImageCardProps {
  key: number;
  src: string;
  width: number;
  height: number;
}

const ImageCard: FC<ImageCardProps> = ({ width, height, src }) => {
  return (
    <div className="flex justify-center">
      <Image
        src={src}
        width={width}
        height={height}
        className={`shadow-md rounded-xl object-cover w-[${width}px] h-[${height}px]`}
        alt="illustration"
      />
    </div>
  );
};

export default ImageCard;
