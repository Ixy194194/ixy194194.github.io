import Image from 'next/image';
import {FC} from 'react';
import {ImageCardProps} from "../../types/ImageCardProps"

const ImageCard: FC<ImageCardProps> = ({width, height, src}) => {
    return (
        <div className='flex min-w-[12.5rem] max-h-[18.75rem] justify-center'>
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
