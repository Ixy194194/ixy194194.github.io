import Image from 'next/image';
import { FC } from 'react';
import { ImageCardProps } from "../../types/ImageCardProps";

export const imageCardSize = {
    width: 12.5,
    height: 18.75
};

const ImageCard: FC<ImageCardProps> = ({width, height, src}) => {
    return (
        <div className={`flex w-[${imageCardSize.width}rem] h-[${imageCardSize.height}rem] justify-center`}>
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
