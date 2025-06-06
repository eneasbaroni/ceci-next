"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
    const [viewWidth, setViewWidth] = useState<number>();
    const [noHeight, setNoHeight] = useState(true);
    const [menuHide, setMenuHide] = useState(true);

    const [showMenu, setShowMenu] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        setViewWidth(window.innerWidth);
    }, []);

    const handleViewWidth = () => {
        setViewWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleViewWidth);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <header className="relative w-full h-16 mobile:h-24 px-[2vw] flex flex-col justify-center gap-4 items-center mo bg-white/40 backdrop-blur-[5px] shadow-sm">
                <Link href="/" className="h-10 flex">
                    <img
                        className="w-full  object-contain"
                        src="/images/header/logo.svg"
                        alt="logo"
                    />
                </Link>
                <img
                    id="menuToggle"
                    src="/images/header/menu.svg"
                    alt="menu"
                    className="absolute mobile:relative top-6 mobile:top-0 right-[2vw] h-3 object-contain cursor-pointer"
                    onClick={handleMenu}
                />
            </header>
            <AnimatePresence>
                {showMenu && (
                    <motion.div
                        className="h-[100dvh] fixed z-[101] top-0  w-screen bg-opacity-50 bg-white backdrop-blur-[5px] flex items-center justify-center"
                        initial={{ y: "-120%", borderRadius: "50rem" }}
                        animate={{ y: "0%", borderRadius: "0rem" }}
                        transition={{
                            duration: 1,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        exit={{
                            y: "-120%",
                            borderRadius: "50rem",
                            transition: { duration: 0.5 },
                        }}
                        onClick={handleMenu}
                    >
                        <motion.div
                            className="relative flex flex-col gap-4 items-center justify-center m-auto bg-[#FED8D8] [&_a]:font-moneta [&_a>p]:text-2xl [&_a>p]:text-white rounded-full"
                            initial={{
                                height: "100%",
                                width: "100%",
                                borderRadius: "0rem",
                                maxWidth: "2000px",
                            }}
                            animate={{
                                height: "90%",
                                width: "90%",
                                borderRadius: "20rem",
                                maxWidth: "300px",
                            }}
                            transition={{
                                delay: 0.5,
                                duration: 1,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-32 text-white"
                                onClick={handleMenu}
                            >
                                X
                            </button>
                            <p className="text-3xl text-white">✹</p>
                            <Link
                                href="/"
                                className="navLink"
                                onClick={handleMenu}
                            >
                                <motion.p
                                    className="navLink"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 1,
                                    }}
                                >
                                    Inicio
                                </motion.p>
                            </Link>
                            <Link
                                href="/books"
                                className="navLink"
                                onClick={handleMenu}
                            >
                                <motion.p
                                    className="navLink"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 1.2,
                                    }}
                                >
                                    Mis Libros
                                </motion.p>
                            </Link>
                            {/* <!-- <a href='/blog' className='navLink'>Blog</a> --> */}
                            <Link
                                href="/about"
                                className="navLink"
                                onClick={handleMenu}
                            >
                                <motion.p
                                    className="navLink"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 1.4,
                                    }}
                                >
                                    Sobre mi
                                </motion.p>
                            </Link>
                            <Link
                                href="/contact"
                                className="navLink"
                                onClick={handleMenu}
                            >
                                <motion.p
                                    className="navLink"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 1.6,
                                    }}
                                >
                                    Contacto
                                </motion.p>
                            </Link>
                            <p className="text-3xl text-white">✹</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
