import Products from "../common/Products.tsx";
import TopTitle from "../common/TopTitle.tsx";
import React from "react";

interface Image {
    src: string;
    alt: string;
}

interface Category {
    id: number;
    name: string;
    slug: string;
}

interface Product {
    id: number;
    name: string;
    price: string; // WooCommerce zwraca cenę jako string
    images: Image[];
    categories: Category[]; // ✅ Dodaj tę właściwość
}

interface ShopProps {
    products: Product[]; // Upewniamy się, że `products` jest przekazywane poprawnie
}

const Shop: React.FC<ShopProps> = ({ products }) => {
    return (
        <>
            <TopTitle title="Produkty" subTitle="sprawdź nasze niesamowite produkty" />
            <main className="max-w-screen-xl mx-auto text-justify px-12 animate-fadeIn flex">
                <div>
                    <div className="flex flex-col ">
                        <h2 className="text-2xl font-bold text-customRed m-10 text-center">Najchętniej kupowane</h2>

                        {/* Wyświetlamy tylko 6 produktów */}
                        <Products products={products} category="Hoodies" limit={10} />

                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div>
                        <div>Cumque deleniti dignissimos doloremque et harum laboriosam...</div>
                        <div>Aperiam, blanditiis cupiditate debitis delectus dignissimos...</div>
                        <div>Aliquam consectetur culpa cumque cupiditate deserunt...</div>
                        <div>Dicta eaque earum harum labore maiores officiis quo...</div>
                    </div>
                </div>
                <div className="">
                    <h2>Filters</h2>
                </div>
            </main>
        </>
    );
};

export default Shop;