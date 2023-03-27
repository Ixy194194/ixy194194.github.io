import { FC } from 'react';
import Image from 'next/image';

const Profile: FC = () => {
  return (
    <>
      <div className="fixed flex flex-wrap flex-col justify-center items-center w-full h-screen text-4xl lg:text-8xl font-bold text-slate-500 z-20">
        <Image
          src="/icon.jpeg"
          width={150}
          height={150}
          className="rounded-full mb-8"
          alt="illustration"
        />
        <div>
          Ｉｘｙ
          <span className="text-5xl">いくしー</span>
        </div>
      </div>
    </>
  );
};

export default Profile;
