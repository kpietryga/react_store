import React, { useEffect, useState } from "react";
import { fetchData } from "../../api/Api.tsx";

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


const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        const params = { params: {per_page: 9,}}
        const fetchProducts = async (): Promise<void> => {
            try {
                const productsData = await fetchData("products", params);
                setProducts(productsData);
            } catch (error) {
                console.error("Błąd:", error);
            }
        };
        fetchProducts().catch();
    }, [products]);

    return (
        <>
            <h1 className="text-2xl font-bold text-customRed m-10">Promoted Products</h1>

            {products.length > 0 ? (
                <ul className="flex flex-wrap gap-3 justify-center animate-fadeIn">
                    {products.map((product) => (
                        <li className="max-w-xs" key={product.id}>
                            <img src={product.images[0].src} alt={product.name} />
                            <p>{product.name}</p>
                            <p>Cena: {product.price} PLN</p>
                            <button>Dodaj do koszyka </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default Products;