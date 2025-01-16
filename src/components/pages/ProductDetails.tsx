import {useLocation} from "react-router-dom";
import TopTitle from "../common/TopTitle.tsx";
import React from "react";

interface Image {
    src: string;
    alt: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    images: Image[];
}

const ProductDetails: React.FC = () => {
    const location = useLocation();
    const product = location.state?.product as Product;

    if (!product) {
        return <p>Błąd: Produkt nie został znaleziony.</p>;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(product.id)
    }
    return (
        <>

            <TopTitle title="Sklep" subTitle={product.name}/>

            <div className="product-details flex max-w-7xl m-auto p-9 ">

                <div className="w-1/2"><img src={product.images[0].src} alt={product.name} className="m-auto"/></div>

                <div className="w-1/2  px-9">
                    <h1 className="text-customBlack text-3xl mb-4">{product.name}</h1>
                    <p className="text-customRed text-xl mb-4">Cena: {product.price} PLN</p>
                    <p className="text-customGrayText mb-4">{product.description}</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input className=" p-2 rounded border border-customBlack" min="1" max="99" step="1"
                                   type="number" id="quantity" defaultValue="1"/>
                        </div>
                        <button type="submit" className="rounded bg-customRed  p-2 text-white flex-grow"> + Dodaj do
                            koszyka
                        </button>
                    </form>

                </div>

            </div>
        </>
    );
}

    export default ProductDetails

