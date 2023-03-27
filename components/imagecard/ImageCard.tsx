import Image from 'next/image';
import { FC } from 'react';

export interface ImageCardProps {
    key: number;
    src: string;
    width: number;
    height: number;
};

export const imageCardSize = {
    width: 12.5,
    height: 18.75
};

const ImageCard: FC<ImageCardProps> = ({ width, height, src }) => {
    return (
        <div className='flex w-[12.5rem] h-[18.75rem] justify-center'>
            <Image
                src={src}
                width={width}
                height={height}
                className={`shadow-md rounded-xl object-cover w-full h-full`}
                alt="illustration"
            />
        </div>
    );
};

export default ImageCard;
