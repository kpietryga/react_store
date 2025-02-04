import React from "react";
import PromotedProducts from "../common/Products.tsx";
import MainSlider from "../common/MainSlider.tsx";


const Home: React.FC = () => {

    return (
        <>
            <div className="max-w-7xl mx-auto px-9">
                <MainSlider/>
            </div>

            <main className="max-w-screen-xl mx-auto text-center px-9">

                <h2 className="text-2xl font-bold text-customRed m-10">Najchetniej kupowane</h2>
                <PromotedProducts/>
                <h2 className="text-2xl font-bold text-customRed m-10">Promocje</h2>
                <PromotedProducts/>
                <h2 className="text-2xl font-bold text-customRed m-10">Polecane</h2>
                    <PromotedProducts/>
                    <div className="my-9 flex gap-5 text-justify">
                    </div>
            </main>
        </>
)
}

export default Home;