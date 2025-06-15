"use client";

import Link from "next/link";

const NewFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full h-auto min-h-[300px] bg-gradient-to-t from-[#fce1e1] to-white border-t border-[#1e1c2191]">
            <div className="max-w-7xl mx-auto px-4 tablet:px-6 notebook:px-8 h-full">
                <div className="py-8 tablet:py-12 h-full">
                    <div className="grid grid-cols-3 mobile:grid-cols-1 gap-8">
                        {/* Contact Information */}
                        <div className="space-y-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Contacto
                            </h3>
                            <a
                                href="mailto:cecitorres.eduparaelduelo@gmail.com"
                                className="block text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                cecitorres.eduparaelduelo@gmail.com
                            </a>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Enlaces
                            </h3>
                            <div className="flex flex-col space-y-2 items-center">
                                <Link
                                    href="/"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    Inicio
                                </Link>
                                <Link
                                    href="/books"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    Mis Libros
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    Sobre mi
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    Contacto
                                </Link>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="space-y-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Redes Sociales
                            </h3>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.facebook.com/ceci.torres.7315"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <img
                                        src="/images/footer/facebook.svg"
                                        alt="Facebook"
                                        className="w-6 h-6"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/ceciliatorres.tanatologia/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <img
                                        src="/images/footer/instagram.svg"
                                        alt="Instagram"
                                        className="w-6 h-6"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t border-gray-400">
                        <div className="flex flex-row mobile:flex-col justify-between mobile:justify-center items-center space-y-0 mobile:space-y-4 text-left mobile:text-center">
                            <p className="text-sm text-gray-600">
                                © {currentYear} CECILIA TORRES. Todos los
                                derechos reservados.
                            </p>
                            <p className="text-sm text-gray-600">
                                Diseño y desarrollo por{" "}
                                <a
                                    href="https://eneasbaroni.com.ar/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-900 hover:text-gray-700 transition-colors"
                                >
                                    Eneas
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default NewFooter;
