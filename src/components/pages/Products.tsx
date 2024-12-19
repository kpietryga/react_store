import PromotedProducts from "../common/PromotedProducts.tsx";
import TopTitle from "../common/TopTitle.tsx";
import React from "react";

const Products: React.FC = () => {

    return (
        <>
            <TopTitle title="Produkty" subTitle="sprawdź nasze niesamowite produkty"/>
            <main className="max-w-screen-xl mx-auto text-justify p-12">
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque ea error eum fuga illo
                    porro quod temporibus vero voluptatem! Earum eos excepturi illum itaque odit omnis, placeat quod?
                    Asperiores?
                </div>
                <PromotedProducts/>
            </main>
        </>


    )
}

export default Products;