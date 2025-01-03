import React, { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

const Cart: React.FC = () => {
    const [isCartHidden, setIsCartHidden] = useState(false);

    const hideCart = () => {
        setIsCartHidden(true);
        console.log("Koszyk ukryty");
    };

    return (
        <div
            className={`fixed top-0 bottom-0 right-0 bg-white shadow-xl p-9 transition-all duration-300 z-50 ${
                isCartHidden ? "left-full" : "left-2/3"
            }`}
        >
            <div className="flex justify-between">
                <p>Twój koszyk</p>
                <XCircleIcon
                    onClick={hideCart}
                    className="h-8 w-8 text-gray-500 hover:rotate-180 transition duration-150"
                />
            </div>
        </div>
    );
};

export default Cart;