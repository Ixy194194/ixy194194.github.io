import { FC } from 'react';
import Image from 'next/image';

const Profile: FC = () => {
  return (
    <>
      <div className="absolute flex justify-center items-center w-screen h-screen text-8xl font-bold text-slate-500 z-10">
        <div>
          Ｉｘｙ
          <span className="text-5xl">いくしー</span>
        </div>
      </div>
      <div className="fixed flex flex-wrap justify-center items-center w-full h-screen text-4xl lg:text-8xl font-bold text-slate-500 z-10">
        <Image
          src="/icon.jpeg"
          width={150}
          height={150}
          className="mb-80 rounded-full"
          alt="illustration"
        />
      </div>
    </>
  );
};

export default Profile;
