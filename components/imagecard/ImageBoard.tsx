import {FC} from 'react';
import ImageCard from './ImageCard';
import {ImageCardProps} from "../../types/ImageCardProps"

const ImageBoard: FC = () => {
    const imageCardProps: Array<ImageCardProps> = [
        {key: 0, src: "/001.jpg", width: 180, height: 300},
        {key: 1, src: "/002.jpg", width: 180, height: 500},
        {key: 2, src: "/003.jpg", width: 180, height: 300},
        {key: 3, src: "/004.jpg", width: 180, height: 200},
        {key: 4, src: "/005.jpg", width: 180, height: 300},
        {key: 5, src: "/006.jpg", width: 180, height: 400},
        {key: 6, src: "/007.jpg", width: 180, height: 300},
        {key: 7, src: "/008.jpg", width: 180, height: 600},
        {key: 8, src: "/009.jpg", width: 180, height: 300},
        {key: 9, src: "/010.jpg", width: 180, height: 200},
        {key: 10, src: "/011.jpg", width: 180, height: 200},
        {key: 11, src: "/012.jpg", width: 180, height: 100},
    ];
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 z-10 opacity-25 px-2 py-8">
            {imageCardProps.map((imageCardProp) =>
                <ImageCard key={imageCardProp.key}
                           src={imageCardProp.src}
                           width={imageCardProp.width}
                           height={imageCardProp.width}
                />
            )}
        </div>
    );
};

export default ImageBoard;
