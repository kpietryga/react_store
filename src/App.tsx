import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Shop from "./components/pages/Shop.tsx";
import NotFound from "./components/pages/NotFound";
import Offer from "./components/pages/Offer.tsx";
import Cart from "./components/common/Cart/Cart.tsx";
import Checkout from "./components/pages/Checkout.tsx";
import {useEffect, useState} from "react";
import ProductDetails from "./components/pages/ProductDetails";
import {fetchData} from "./api/Api.tsx";
// import TopTitle from "./components/common/TopTitle.tsx";

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


const App = () => {
    const [isCartHidden, setIsCartHidden] = useState(false);
    const handleClick = (bool:boolean):void=> setIsCartHidden(bool)
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const params = {params: {per_page: 100,}}
        const fetchProducts = async (): Promise<void> => {
            try {
                const productsData = await fetchData("products", params);
                setProducts(productsData);
            } catch (error) {
                console.error("Błąd:", error);
            }
        };
        fetchProducts().catch();
    }, []);

    console.log(products);

    return (
        <Router>
            <Cart hidden={isCartHidden} onClick={() => setIsCartHidden(true)}/>
            <Header onClick={() =>handleClick(false)}/>
                <Routes>
                    <Route path="/" element={<Home products={products}/>} />
                    <Route path="/products" element={<Shop />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
        </Router>
    );
};

export default App;