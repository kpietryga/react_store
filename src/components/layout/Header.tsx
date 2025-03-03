import {Link} from "react-router-dom";
import TopBar from "../common/TopBar.tsx";
import rozaLogo from '../../assets/roza-logo.png';
import {
    ShoppingCartIcon,
    PhoneIcon,
    MagnifyingGlassIcon,
    EnvelopeIcon
} from "@heroicons/react/24/outline";
import {TEL, EMAIL} from "../common/ContactData.tsx";
import {useEffect, useState} from "react";
import HamburgerMenu from "./HamburgerMenu.tsx";
// import Shop from "../pages/Shop.tsx";


interface HeaderProps {
    onClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Czyszczenie event listenera po unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className="bg-white text-customGrayText">
            <TopBar />

            <div className="max-w-screen-xl m-auto flex justify-between items-center px-9 py-4" id="top-header">
                <div id="logo" className="logo">
                    <Link to="/">
                        <img src={rozaLogo} alt="Logo" className="h-12 w-auto"/>
                    </Link>
                </div>

                <div className="top-cotact-container flex-col items-center justify-center">
                    <div className="phone flex items-center">
                        <a href={"tel:" + TEL} className="flex gap-3">
                            <PhoneIcon className="h-5 w-5 text-customRed "/>
                            <p className="text-customBlack ">{TEL}</p></a>
                    </div>
                    <div className="mail flex items-center">
                        <a href={"mailto:" + EMAIL} className="flex gap-3"> <EnvelopeIcon
                            className="h-5 w-5 text-customRed "/> <p
                            className="text-customBlack ">{EMAIL}</p></a>
                    </div>

                </div>
                <div className="search flex relative" id="search-container">
                    <input className="border rounded-xl p-2" id="search-input" type="text" placeholder="Wyszukaj..."/>
                    <MagnifyingGlassIcon className="absolute h-6 w-6 text-gray-200 right-2 top-1/2 -translate-y-1/2"/>
                </div>

                <div className="flex gap-2">
                    <p>0,00 zł</p>
                    <button className="flex items-center" onClick={onClick}><ShoppingCartIcon className="h-6 w-6 text-customRed"/></button>
                </div>

            </div>

            <div className="min-h-[65px]">
                <nav className={`${
                    isFixed ? 'fixed top-0 left-0 w-full ' : 'relative'
                } transition-all duration-300 bg-white flex justify-center border-t-gray-200 border-t w-full`}>

                    <HamburgerMenu />
                </nav>


            </div>
        </header>
    );
};

export default Header;