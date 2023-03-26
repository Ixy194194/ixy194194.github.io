import Image from 'next/image';
import {FC} from 'react';
import {ImageCardProps} from "../../types/ImageCardProps"

const ImageCard: FC<ImageCardProps> = ({width, height, src}) => {
    return (
        <div className='flex min-w-[200px] justify-center'>
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
