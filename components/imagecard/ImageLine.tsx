import { FC } from "react";
import { ImageLineProps } from '../../types/ImageLineProps';

export const imageLinePaddingSize = {
    x: 6,
    y: 8
};

const ImageLine: FC<ImageLineProps> = ({ lineArray }) => {
    return (
        <div className={`relative flex gap-12 opacity-25 px-${imageLinePaddingSize.x} py-${imageLinePaddingSize.y} image-line-anim`}>
            {lineArray.map((v, i) => (
                <div key={i} className="flex h-full justify-between gap-12">
                    {v}
                </div>
            ))}
        </div>
    );
};

export default ImageLine;
