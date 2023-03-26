import { FC } from "react";
import Image from "next/image";

const Profile: FC = () => {
    return (
        <>
            <div className="fixed flex flex-wrap justify-center items-center w-full h-screen text-4xl lg:text-8xl font-bold text-slate-500 z-10">
                Ｉｘｙ（いくしー）
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
