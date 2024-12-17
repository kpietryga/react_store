import React from "react";
import PromotedProducts from "./PromotedProducts";


const Products: React.FC = () => {

    return (
        <div>
            <h1 className="text-4xl font-bold text-blue-500 m-10">Products</h1>
            <PromotedProducts/>
        </div>
    )
}

export default Products;