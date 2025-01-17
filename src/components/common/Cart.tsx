//import React, {useState} from "react";
import {XCircleIcon} from "@heroicons/react/24/outline";
import CartItem from "./CartItem.tsx";

const product = {
    name: "bukiet",
    price: "123",
    url: "https://woo.pietryga.com.pl/wp-content/uploads/2024/12/rozowafantazja-1.jpg",
}

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

            <CartItem product={product} />
            <CartItem product={product} />
            <CartItem product={product} />

            <div className="">
                <p>suma: 100,00 zł</p>
            </div>

        </div>
    );
};

export default Cart;