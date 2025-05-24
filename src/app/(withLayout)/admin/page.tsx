"use client";

import Link from "next/link";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import VideoForm from "./components/memoraForm";
import Loader from "../../components/Loader";
import ProfileContainer from "./components/profileContainer";
import { useState } from "react";
import MemoraList from "./components/memoraList";
import { AnimatePresence } from "framer-motion";
import Info from "./components/memoraList/info";

const Admin = () => {
  const { data: session, status } = useSession();
  const [memoraList, setMemoraList] = useState(true);

  const handleList = () => {
    setMemoraList(!memoraList);
  };

  return (
    <div className="px-4 bg-slate-600 min-h-[calc(100vh-8rem)] bg-[url(/images/index/cloud.svg)] bg-no-repeat bg-cover bg-center">
      <AnimatePresence>
        {memoraList && (
          <MemoraList key="memoraList" handleList={handleList}></MemoraList>
        )}
      </AnimatePresence>
      <h1 className="m-0 text-center mobile:text-2xl">Panel Administrador</h1>
      {status === "loading" && <Loader />}
      {session ? (
        <div className="flex flex-col min-h-[calc(100vh-11rem)] pb-4 items-center justify-start relative">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-center mt-2 mb-2 mobile:text-xl">
              Bienvenido {session.user?.name}
            </h3>
            <ProfileContainer url={session.user?.image!} />
          </div>
          <div>
            {session.user?.email === process.env.NEXT_PUBLIC_ADMIN_MAIL ||
            session.user?.email === process.env.NEXT_PUBLIC_MG_MAIL ? (
              <>
                <VideoForm />
                <button
                  className="flex gap-2 align-center justify-center bg-[#968ab9] text-white rounded-md py-2 px-4 m-auto mt-4 hover:bg-[#fbfbfb] hover:text-[#968ab9] transition-all duration-300"
                  onClick={handleList}
                >
                  Ver Memoras
                </button>
              </>
            ) : (
              <>
                <p className="text-xl mt-4 mobile:text-sm">
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
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-center mobile:text-xl">
            Para acceder al panel debe iniciar sesión
          </h3>
          <button
            className="w-40 mobile: flex gap-2 align-center justify-center bg-[#968ab9] mobile:text-xs items-center text-white rounded-md p-4 mobile:p-2 m-auto mt-4 hover:bg-[#fbfbfb] hover:text-[#968ab9] transition-all duration-300"
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
