import { FC } from 'react';
import {SnsLink} from "../types/SnsLink"

const SnsLink: FC = () => {
  const snsLinks: Array<SnsLink> = [
    {url: "https://twitter.com/Ixy", label: "Twitter"},
    {url: "https://www.instagram.com/ixy__194/?hl=ja", label: "Instagram"},
    {url: "https://www.youtube.com/@ixy", label: "YouTube"},
    {url: "https://ixy.fanbox.cc/", label: "fanbox"},
    {url: "https://ci-en.dlsite.com/creator/5868", label: "Ci-en"},
  ]
  return (
    <div className=" sticky absolute bottom-0 left-0 w-full h-20 bg-slate-50 z-10">
      <div className="flex justify-center items-center h-full">
        {snsLinks.map((snslink) => <a key={snslink.url} href={snslink.url} target="_blank" rel="noopener noreferrer" className="ml-4">{snslink.label}</a>)}
      </div>
  </div>
  );
};

export default SnsLink