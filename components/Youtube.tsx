import {FC} from 'react';
import {YoutubeId} from "../types/Youtube"
import YouTube from 'react-youtube';

const YouTubeView : FC = () => {
    const YoutubeIds: Array<YoutubeId> = [
        {VideoId: "ql-PZAIBd9s"}
    ]
  return (
    <div className="relative w-full h-96 zindex99">
        <div className="flex justify-center items-center h-full zindex99">
            <YouTube videoId={YoutubeIds[0].VideoId} className="zindex99"/>
        </div>
    </div>
  );
}

export default YouTubeView;