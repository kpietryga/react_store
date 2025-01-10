import React, { useEffect, useState } from "react";
import { fetchData } from "../../api/Api.tsx";

interface Product {
    id: number;
    name: string;
    price: number;
    images: []
    // Dodaj inne pola zgodnie z danymi, które zwraca `fetchData`.
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async (): Promise<void> => {
            try {
                const productsData: Product[] = await fetchData("products");
                console.log(productsData);
                setProducts(productsData);
            } catch (error) {
                console.error("Błąd:", error);
            }
        };

        fetchProducts().catch((error) => console.log(error));
    }, []);

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
