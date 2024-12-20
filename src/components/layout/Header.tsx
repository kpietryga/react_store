import {Link} from "react-router-dom";
// import TopBar from "../common/TopBar.tsx";
import rozaLogo from '../../assets/roza-logo.png';
import {ShoppingCartIcon, PhoneIcon, MagnifyingGlassIcon, HomeIcon, EnvelopeIcon} from "@heroicons/react/24/outline";
import {TEL, EMAIL} from "../common/ContactData.tsx";
// import Products from "../pages/Products.tsx";

const liClass = 'px-7 py-5'

const Header = () => {
    return (
        <header className="bg-white text-customGrayText">
            {/*<TopBar />*/}

            <div className="max-w-screen-xl m-auto flex justify-between items-center px-9 py-4" id="top-header">
                <div id="logo" className="logo">

                    <Link to="/">
                        <img src={rozaLogo} alt="Logo" className="h-12 w-auto"/>
                    </Link>
                </div>
                <div className="top-cotact-container flex-col items-center justify-center">
                    <div className="phone flex items-center">
                        <a href={"tel:"+ TEL} className="flex gap-3">
                            <PhoneIcon className="h-5 w-5 text-customRed "/>
                            <p className="text-customBlack ">{TEL}</p></a>
                    </div>
                    <div className="mail flex items-center">
                        <a href={"mailto:" + EMAIL} className="flex gap-3"> <EnvelopeIcon
                            className="h-5 w-5 text-customRed "/> <p
                            className="text-customBlack ">{EMAIL}</p></a>
                    </div>

                </div>
                <div className="search flex" id="search-container">
                    <input className="" id="search-input" type="text" placeholder="Wyszukaj..."/>
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-200 "/>
                </div>
                <Link to="#"><ShoppingCartIcon className="h-6 w-6 text-customRed"/></Link>
            </div>

            <nav className="flex justify-center border-t-gray-200 border-t">
                <ul className="flex max-w-screen-xl uppercase">
                    <li className={liClass}><Link className="flex gap-2 hover:text-customRed" to="/"> <HomeIcon
                        className="h-5 w-5"/></Link></li>
                    <li className={liClass}><Link className="hover:text-customRed" to="/products">Sklep</Link></li>
                    <li className={liClass}><Link className="hover:text-customRed" to="/about">O nas</Link></li>
                    <li className={liClass}><Link className="hover:text-customRed" to="/offer">Usługi</Link></li>
                    <li className={liClass + " flex"}><Link className="hover:text-customRed"
                                                            to="/contact">Kontakt</Link></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;