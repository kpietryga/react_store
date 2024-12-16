import React from "react";
import {Link} from "react-router-dom";

const TopBar: React.FC = () => {
        return (

            <div className="bg-indigo-900 text-center py-4 lg:px-4">
                <Link to="/products">
                    <div
                        className="p-2 bg-indigo-700 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                        role="alert">
                        <span
                            className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Promocja</span>
                        <span className="font-semibold mr-2 text-left flex-auto">Wszystkie koszule taniej -50%</span>
                        <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20">
                            <path
                                d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                        </svg>
                    </div>
                </Link>
            </div>
        )
    }

;
export default TopBar;