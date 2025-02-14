import { useNavigate } from "react-router-dom";
import { ArrowRightCircleIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

interface Image {
    src: string;
    alt: string;
}

interface Category {
    id: number;
    name: string;
    slug: string;
}

interface Tag {
    id: number;
    name: string;
    slug: string;
}

interface Product {
    id: number;
    name: string;
    price: string; // WooCommerce zwraca cenę jako string
    images: Image[];
    categories: Category[];
    tags: Tag[]; // ✅ Dodane tagi
}

interface ProductsProps {
    products: Product[];
    limit?: number;
    category?: string; // Filtrowanie po kategorii
    tag?: string; // ✅ Filtrowanie po tagu
}

const Products: React.FC<ProductsProps> = ({ products, limit, category, tag }) => {
    const navigate = useNavigate();

    // Filtrowanie po kategorii
    const filteredByCategory = category
        ? products.filter(product =>
            product.categories.some(cat => cat.name.toLowerCase() === category.toLowerCase())
        )
        : products;

    // Filtrowanie po tagu
    const filteredByTag = tag
        ? filteredByCategory.filter(product =>
            product.tags.some(t => t.name.toLowerCase() === tag.toLowerCase())
        )
        : filteredByCategory;

    const displayedProducts = limit ? filteredByTag.slice(0, limit) : filteredByTag;

    return (
        <>
            {displayedProducts.length > 0 ? (
                <ul className="flex flex-wrap gap-3 justify-center animate-fadeIn">
                    {displayedProducts.map((product) => (
                        <li className="max-w-64" key={product.id}>
                            <div className="flex flex-col">
                                <p className="rounded-t-md text-center bg-rose-50 font-bold text-customRed p-2">
                                    {product.name}
                                </p>
                            </div>
                            <img src={product.images[0]?.src} alt={product.images[0]?.alt || product.name} />

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
                    Brak szukanych produktów
                </p>
            )}
        </>
    );
};

export default Products;
