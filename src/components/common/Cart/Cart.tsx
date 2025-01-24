import {XCircleIcon} from "@heroicons/react/24/outline";
import CartItem from "./CartItem.tsx";
import React, {useState} from "react";
import {Link} from "react-router-dom";

interface Product{
    id: number;
    name: string;
    price: number;
    url: string
}

interface CartProps {
    hidden: boolean;
    onClick: () => void;
}

const Cart: React.FC<CartProps> = ({ hidden, onClick }) =>{

    const ppp: Product[] = [{
        id: 1,
        name: "buk1",
        price: 123,
        url: "https://woo.pietryga.com.pl/wp-content/uploads/2024/12/rozowafantazja-1.jpg",
    }, {
        id: 2,
        name: "bukiet2",
        price: 123,
        url: "https://woo.pietryga.com.pl/wp-content/uploads/2024/12/rozowafantazja-1.jpg",
    }, {
        id: 3,
        name: "bukiet33",
        price: 123,
        url: "https://woo.pietryga.com.pl/wp-content/uploads/2024/12/rozowafantazja-1.jpg",
    }
    ]

    const [products, setProducts] = useState<Product[]>([...ppp]);

    const removeItem = (id: number) => {
        setProducts(products.filter((item) => item.id !== id))
    }

    const sumItems = (products: Product[]) => products.reduce( (acc:number, curr:Product):number => acc+ curr.price, 0)

    // const addToCart = (products: Product[]) => products.push()


    const cartItems = products.map(pro => {
        return <CartItem product={pro} key={pro.id} remove={removeItem} />
    })


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
            {cartItems}
            <div className="">
                <p>suma: {sumItems(products)} zł</p>
            </div>

            <div  className="my-4" >
                <Link className="text-center bg-transparent hover:bg-customRed text-customRed font-semibold hover:text-white py-2 px-4 border border-customRed hover:border-transparent rounded" to="/checkout">Przejdź do zamówienia</Link>
            </div>
            {/*<div className="text-center bg-transparent hover:bg-customRed text-customRed font-semibold hover:text-white py-2 px-4 border border-customRed hover:border-transparent rounded">*/}
            {/*    <button>przejdż do koszyka</button>*/}
            {/*</div>*/}
        </div>
    );
};

export default Cart;