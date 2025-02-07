import React from "react";
import MainSlider from "../common/MainSlider.tsx";
import Products from "../common/Products.tsx"; // Dodano import

interface Image {
    src: string;
    alt: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
    images: Image[];
}

interface HomeProps {
    products?: Product[];
}

const Home: React.FC<HomeProps> = ({ products = [] }) => { // Domyślnie pusty array, aby uniknąć błędu
    return (
        <>
            <div className="max-w-7xl mx-auto px-9">
                <MainSlider />
            </div>

            <main className="max-w-screen-xl mx-auto text-center px-9">
                <h2 className="text-2xl font-bold text-customRed m-10">Nasze produkty</h2>

                {/* Wyświetlenie produktów */}
                <Products products={products} />

                <h2 className="text-2xl font-bold text-customRed m-10">Najchętniej kupowane</h2>
                {/*<PromotedProducts/>*/}
                <h2 className="text-2xl font-bold text-customRed m-10">Promocje</h2>
                {/*<PromotedProducts/>*/}
                <h2 className="text-2xl font-bold text-customRed m-10">Polecane</h2>
                {/*<PromotedProducts/>*/}
            </main>
        </>
    );
};

export default Home;