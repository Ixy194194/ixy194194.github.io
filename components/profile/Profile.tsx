import { FC } from "react";
import Image from "next/image";

const Profile: FC = () => {
    return (
        <>
            <div className="fixed flex flex-wrap flex-col justify-center items-center w-full h-screen text-4xl lg:text-8xl font-bold text-slate-500 z-10">
                <Image
                    src="/icon.jpeg"
                    width={150}
                    height={150}
                    className="rounded-full mb-8"
                    alt="illustration"
                />
              <div className="flex justify-center flex-col items-center">
                <span className="dark:text-gray-300">
                  Ｉｘｙ
                </span>
                <div className="grid grid-cols-3 items-center justify-center mt-3">
                  <hr className="w-full border-slate-400 dark:border-gray-400"/>
                  <span className="mx-3 text-xl text-slate-500 dark:text-gray-300">いくしー</span>
                  <hr className="w-full border-slate-400 dark:border-gray-400"/>
                </div>
              </div>
           </div>
        </>
    );
};

export default Profile;
