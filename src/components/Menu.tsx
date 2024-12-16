import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <header className="bg-gray-800 text-white">
            <div className="max-w-screen-xl m-auto">
                <nav>
                    <ul className="flex items-center justify-around text-xl p-6">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="#">Cart</Link></li>
                    </ul>
                </nav>

            </div>

        </header>


    );
};

export default Navigation;