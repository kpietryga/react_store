import React, { useState } from "react";
import {Link} from "react-router-dom";
import {HomeIcon} from "@heroicons/react/24/outline";

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const liClass = 'px-7 py-5'

    return (
        <div className="relative">
            {/* Przycisk hamburger */}
            <button
                onClick={toggleMenu}
                className="block md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    // Ikona zamknięcia
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    // Ikona hamburgera
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                )}
            </button>

            {/* Menu rozwijane */}
            {isOpen && (
                <div className="absolute right-0 top-12 w-48 bg-white border rounded-lg shadow-lg md:hidden">
                    <ul className="max-w-screen-xl uppercase">
                        <li className={liClass}><Link className="flex gap-2 hover:text-customRed" to="/"> <HomeIcon
                            className="h-5 w-5"/></Link></li>
                        <li className={liClass}><Link className="hover:text-customRed" to="/products">Sklep</Link></li>
                        <li className={liClass}><Link className="hover:text-customRed" to="/about">O nas</Link></li>
                        <li className={liClass}><Link className="hover:text-customRed" to="/offer">Usługi</Link></li>
                        <li className={liClass}><Link className="hover:text-customRed" to="/checkout">Zamowienie</Link>
                        </li>
                        <li className={liClass + " flex"}><Link className="hover:text-customRed"
                                                                to="/contact">Kontakt</Link></li>
                    </ul>
                </div>
            )}


            {/* Menu desktopowe */}
            <div className="hidden md:flex space-x-4 flex justify-center align-middle">
                <ul className="flex max-w-screen-xl uppercase">
                    <li className={liClass}><Link className="flex gap-2 hover:text-customRed" to="/"> <HomeIcon
                        className="h-5 w-5"/></Link></li>
                    <li className={liClass}><Link className="hover:text-customRed" to="/products">Sklep</Link></li>
                    <li className={liClass}><Link className="hover:text-customRed" to="/about">O nas</Link></li>
                    <li className={liClass}><Link className="hover:text-customRed" to="/offer">Usługi</Link></li>
                    <li className={liClass}><Link className="hover:text-customRed" to="/checkout">Zamowienie</Link>
                    </li>
                    <li className={liClass + " flex"}><Link className="hover:text-customRed"
                                                            to="/contact">Kontakt</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;
