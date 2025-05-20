import { div } from "framer-motion/client";
import VideoContainer from "../components/videoContainer";
import localFont from "next/font/local";

const moneta = localFont({
    src: [
        {
            path: "../../../fonts/Moneta-Regular.ttf",
            weight: "900",
        },
    ],
    variable: "--font-moneta",
});

export const fetchCache = "force-no-store";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const Video = async ({ params: { code } }: { params: { code: string } }) => {
    const data = await fetch(`${baseUrl}/api/memora/${code}`);
    const res = await data.json();
    return (
        <div
            className={`bg-slate-600 min-h-screen bg-[url(/images/index/cloud.svg)] bg-no-repeat bg-cover bg-center ${moneta.variable}`}
        >
            {res ? (
                <VideoContainer data={res} />
            ) : (
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="w-96 m-auto h-[90vh] p-10 flex flex-col justify-center items-center border-white border-4  text-center rounded-full">
                        <p className="text-3xl text-white">✹</p>
                        <h1 className="text-3xl  font-bold">
                            No se encontró el video
                        </h1>
                        <p className="">
                            Verifica el código o vuelve a intentarlo más tarde.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Video;
