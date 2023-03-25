import { FC } from "react";
import { ImageLineProps } from '../../types/ImageLineProps';

const ImageLine: FC<ImageLineProps> = ({ lineArray }) => {
	return (
		<div className="absolute flex gap-12 opacity-25 px-6 py-8 image-line-anim">
            {lineArray.map((v, i) => (
                <div key={i} className="flex justify-between gap-12">
                    {v}
                </div>
            ))}
    	</div>
	);
};

export default ImageLine;
