import { useNavigate } from "react-router-dom";
import { ArrowRightCircleIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

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

interface ProductsProps {
    products: Product[];
    limit?: number; // Dodany limit
}

const Products: React.FC<ProductsProps> = ({ products, limit }) => {
    const navigate = useNavigate();
    const displayedProducts = limit ? products.slice(0, limit) : products; // Ograniczenie liczby produktów

    return (
        <>
            {displayedProducts.length > 0 ? (
                <ul className="flex flex-wrap gap-3 justify-center animate-fadeIn">
                    {displayedProducts.map((product) => (
                        <li className="max-w-xs" key={product.id}>
                            <div className="flex flex-col">
                                <p className="rounded-t-md text-center bg-rose-50 font-bold text-customRed p-2">
                                    {product.name}
                                </p>
                            </div>
                            <img src={product.images[0].src} alt={product.name} />

                            <p className="text-center bg-rose-100 p-2">
                                <span className="text-customRed font-bold">Cena:</span> {product.price} PLN
                            </p>

                            <div className="flex justify-stretch">
                                <button className="rounded-bl-md bg-customRed p-2 text-white flex-grow">
                                    + Dodaj do koszyka
                                </button>
                                <button
                                    onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                                    className="rounded-br-md bg-customRose text-white p-2 flex-grow flex items-center gap-2 justify-center"
                                >
                                    Więcej <ArrowRightCircleIcon className="h-8 w-8" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">
                    <ArrowPathIcon className="m-auto w-10 h-10 animate-spin text-customGrayText" />
                </p>
            )}
        </>
    );
};

export default Products;