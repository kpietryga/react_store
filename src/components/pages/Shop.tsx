import Products from "../common/Products.tsx";
import TopTitle from "../common/TopTitle.tsx";
import React, { useState } from "react";

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
    price: string;
    images: Image[];
    categories: Category[];
    tags: Tag[];
}

interface ShopProps {
    products: Product[];
}

const Shop: React.FC<ShopProps> = ({ products }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<string>("asc");
    const [minPrice, setMinPrice] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<string>("");

    const categories = Array.from(new Set(products.flatMap(p => p.categories.map(c => c.name))));
    const tags = Array.from(new Set(products.flatMap(p => p.tags.map(t => t.name))));

    const filteredProducts = products
        .filter(product => (selectedCategory ? product.categories.some(c => c.name === selectedCategory) : true))
        .filter(product => (selectedTag ? product.tags.some(t => t.name === selectedTag) : true))
        .filter(product => (minPrice ? parseFloat(product.price) >= parseFloat(minPrice) : true))
        .filter(product => (maxPrice ? parseFloat(product.price) <= parseFloat(maxPrice) : true))
        .sort((a, b) => sortOrder === "asc" ? parseFloat(a.price) - parseFloat(b.price) : parseFloat(b.price) - parseFloat(a.price));

    return (
        <>
            <TopTitle title="Produkty" subTitle="Sprawdź nasze niesamowite produkty" />
            <main className="max-w-screen-xl mx-auto text-justify px-12 animate-fadeIn flex">
                <div className="w-1/4 pr-9 pt-9 ">
                    <h2 className="text-xl font-bold">Filtry</h2>
                    <div className="mt-4">
                        <label className="block font-semibold">Kategoria:</label>
                        <select className="w-full p-2 border" onChange={e => setSelectedCategory(e.target.value || null)}>
                            <option value="">Wszystkie</option>
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="block font-semibold">Tag:</label>
                        <select className="w-full p-2 border" onChange={e => setSelectedTag(e.target.value || null)}>
                            <option value="">Wszystkie</option>
                            {tags.map(tag => (
                                <option key={tag} value={tag}>{tag}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="block font-semibold">Sortowanie:</label>
                        <select className="w-full p-2 border" onChange={e => setSortOrder(e.target.value)}>
                            <option value="asc">Cena rosnąco</option>
                            <option value="desc">Cena malejąco</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="block font-semibold">Cena (min - max):</label>
                        <div className="flex space-x-2">
                            <input
                                type="number"
                                className="w-1/2 p-2 border"
                                placeholder="Min"
                                value={minPrice}
                                onChange={e => setMinPrice(e.target.value)}
                            />
                            <input
                                type="number"
                                className="w-1/2 p-2 border"
                                placeholder="Max"
                                value={maxPrice}
                                onChange={e => setMaxPrice(e.target.value)}
                            />
                        </div>
                    </div>


                </div>
                <div className="w-3/4 p-8 ">
                    <Products products={filteredProducts} limit={filteredProducts.length} />
                </div>
            </main>
        </>
    );
};

export default Shop;
