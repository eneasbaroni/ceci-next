"use client";
import { FormEvent, useState } from "react";

interface IProps {
    data: {
        ci: string;
        nombre: string;
        apellido: string;
        email: string;
        codigo?: string;
        link: string;
    };
}

const VideoContainer = ({ data }: IProps) => {
    const [error, setError] = useState(false);
    const [pass, setPass] = useState(false);

    const [showVideo, setShowVideo] = useState(false);

    const handlePass = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        setPass(false);
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const pass = formData.get("pass") as string;
        if (pass !== data.codigo) {
            setError(true);
            return;
        }
        setPass(true);
    };

    const handlePlay = () => {
        setShowVideo(true);
    };

    return (
        <div className="relative">
            <img
                src="/images/icon.svg"
                alt="logo"
                className="w-10 h-10 absolute top-2 left-1/2 -translate-x-1/2"
            />
            {data.codigo !== "" && !pass && (
                <div className="w-full h-screen flex flex-col justify-center items-center">
                    <form
                        onSubmit={handlePass}
                        className="w-96 m-auto h-[90vh] p-10 flex flex-col justify-center items-center border-white border-4  text-center rounded-full"
                    >
                        <p className="text-3xl text-white">✹</p>
                        <legend className="font-moneta text-3xl mb-2">
                            Ingrede el Código
                        </legend>
                        <input
                            type="text"
                            name="pass"
                            id="pass"
                            placeholder="código de acceso"
                            className="bg-transparent border-b-2  text-center  focus:outline-none focus:border-[#968ab9] mb-4"
                        />
                        {error && (
                            <p className="text-red-500">
                                El código de acceso es incorrecto
                            </p>
                        )}
                        <button
                            type="submit"
                            className="w-40 p-2 mt-4 h-auto m-0 flex gap-2 align-center justify-center bg-[#968ab9] text-white rounded-md  hover:bg-[#fbfbfb] hover:text-[#968ab9] transition-all duration-300"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            )}

            {(data.codigo === "" || pass) && (
                <div
                    className="rounded-t-[1rem] overflow-hidden cursor-pointer p-2"
                    onClick={handlePlay}
                >
                    <iframe
                        src={data.link}
                        /* width="288"
                        height="100" */
                        allowFullScreen
                        className="h-[calc(100vh-1rem)] aspect-[9/17] m-auto rounded-t-[1rem] overflow-hidden"
                    ></iframe>
                </div>
            )}
        </div>
    );
};
export default VideoContainer;

/* 
<iframe
    width="415"
    height="500"
    src="https://www.youtube.com/embed/VjcV_s9EyBU?si=0sdwCGJhIdxufs0c"
    title="YouTube video player"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    className=" h-screen m-auto rounded-t-[2rem] overflow-hidden"
></iframe> 
*/
