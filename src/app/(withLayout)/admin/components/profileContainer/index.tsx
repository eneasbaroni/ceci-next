import { useState } from "react";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";

const ProfileContainer = ({ url }: { url: string }) => {
    const [showBtn, setShowBtn] = useState(false);
    const handleClick = () => {
        setShowBtn(!showBtn);
    };
    return (
        <div className="flex flex-col items-center justify-center absolute top-[-3rem] mobile:bottom-[-10rem] right-12 mobile:right-1/2 translate-x-1/2 w-32 ">
            <img
                src={url}
                alt="logo"
                className="rounded-full w-12 h-12 cursor-pointer"
                onClick={handleClick}
            />
            {showBtn && (
                <motion.button
                    /* className=" bg-[#968ab9] text-white rounded-md py-2 px-4 hover:bg-[#fbfbfb] hover:text-[#968ab9]  text-sm shadow-md" */
                    className=" bg-[#968ab9] text-white rounded-md py-2 px-4 text-sm shadow-md"
                    onClick={() => signOut()}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 10, opacity: 1 }}
                    whileHover={{
                        backgroundColor: "#fbfbfb",
                        color: "#968ab9",
                        transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
                    }}
                    transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                >
                    Cerrar sesión
                </motion.button>
            )}
        </div>
    );
};
export default ProfileContainer;
