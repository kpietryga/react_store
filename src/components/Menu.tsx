import { Link } from "react-router-dom";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";

const Navigation = () => {
    return (
        <header className="bg-white text-customGrayText">
            <div className="max-w-screen-xl m-auto">
                <nav>
                    <ul className="flex items-center text-xl p-6">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="#"><ShoppingCartIcon className="h-6 w-6 text-gray-200 "/></Link></li>
                    </ul>
                </nav>

            </div>

        </header>


    );
};

export default Navigation;