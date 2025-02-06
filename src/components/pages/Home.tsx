import React from "react";
// import PromotedProducts from "../common/Products.tsx";
import MainSlider from "../common/MainSlider.tsx";

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
    products?: Product[]
}


const Home: React.FC<HomeProps>= ({products}: HomeProps) => {
    return (
        <>
            <div className="max-w-7xl mx-auto px-9">
                <MainSlider/>
            </div>

            <main className="max-w-screen-xl mx-auto text-center px-9">

                <div>
                    {products?.map((product: Product) => (
                        <div key={product.id}>
                            {JSON.stringify(product)}
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-customRed m-10">Najchetniej kupowane</h2>
                {/*<PromotedProducts/>*/}
                <h2 className="text-2xl font-bold text-customRed m-10">Promocje</h2>
                {/*<PromotedProducts/>*/}
                <h2 className="text-2xl font-bold text-customRed m-10">Polecane</h2>
                {/*<PromotedProducts/>*/}
                <div className="my-9 flex gap-5 text-justify">
                </div>
            </main>
        </>
    )
}

export default Home;