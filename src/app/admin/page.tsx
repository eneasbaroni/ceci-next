"use client";

import Link from "next/link";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import VideoForm from "./components/videoForm";
import Loader from "../components/Loader";

const Admin = () => {
    const { data: session, status } = useSession();

    return (
        <div className="bg-slate-600 min-h-[calc(100vh-8rem)] bg-[url(/images/index/cloud.svg)] bg-no-repeat bg-cover bg-center">
            <h1 className="m-0 text-center">Panel Administrador</h1>
            {status === "loading" && <Loader />}
            {session ? (
                <div className="flex flex-col min-h-[calc(100vh-11rem)] pb-4 items-center justify-between">
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-center mt-2 mb-2">
                            Bienvenido {session.user?.name}
                        </h3>
                        <img
                            src={session.user?.image!}
                            alt="logo"
                            className="rounded-full w-20 h-20"
                        />
                    </div>
                    <div>
                        {session.user?.email === "eneasbaroni@gmail.com" ? (
                            <VideoForm />
                        ) : (
                            <>
                                <p className="text-xl mt-4">
                                    No tienes acceso a esta pagina
                                </p>
                                <Link
                                    href="/"
                                    className="flex gap-2 align-center justify-center bg-[#968ab9] text-white rounded-md py-2 px-4 m-auto mt-4 hover:bg-[#fbfbfb] hover:text-[#968ab9] transition-all duration-300"
                                >
                                    Volver a Home
                                </Link>
                            </>
                        )}
                        <button
                            onClick={() => signOut()}
                            className="flex gap-2 align-center justify-center bg-[#968ab9] text-white rounded-md py-2 px-4 m-auto mt-4 hover:bg-[#fbfbfb] hover:text-[#968ab9] transition-all duration-300"
                        >
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <h3 className="text-center">
                        Para acceder al panel debe iniciar sesión
                    </h3>
                    <button
                        className="w-40 flex gap-2 align-center justify-center bg-[#968ab9] text-white rounded-md p-4 m-auto mt-4 hover:bg-[#fbfbfb] hover:text-[#968ab9] transition-all duration-300"
                        onClick={() => signIn("google")}
                    >
                        Iniciar sesion{" "}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
                            alt="google icon"
                            className="w-6 h-6"
                        />
                    </button>
                </div>
            )}
        </div>
    );
};
export default Admin;
