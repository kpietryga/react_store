//import React, {useState} from "react";
import {XCircleIcon} from "@heroicons/react/24/outline";

interface CartProps {
    hidden: boolean;
    onClick: () => void;
}

const Cart: React.FC<CartProps> = ({ hidden, onClick }) =>{

    return (
        <div
            className={`fixed top-0 bottom-0  w-96 bg-white shadow-xl p-9 transition-all duration-300 z-50 ${
                hidden ? "-right-96" : " right-0"
            }`}
        >
            <div className="flex justify-between">
                <p>Twój koszyk</p>
                <XCircleIcon
                    onClick={onClick}
                    className="h-8 w-8 text-gray-500 hover:rotate-180 transition duration-150"
                />
            </div>

            <div>
                <div className="flex justify-between"> Product name </div>
                <div className="flex justify-between"> Cena: 12 zł</div>
            </div>


            <div className="flex justify-between">
                <p>Cena</p>
                <p>0,00</p>
            </div>

            <div className="flex justify-between">
                <p>suma</p>
            </div>
        </div>
    );
};

export default Cart;