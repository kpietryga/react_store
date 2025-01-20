import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import {useState} from "react";
import ProductDetails from "./components/pages/ProductDetails";
// import TopTitle from "./components/common/TopTitle.tsx";


const App = () => {
    const [isCartHidden, setIsCartHidden] = useState(false);

    const handleClick = (bool:boolean):void=> setIsCartHidden(bool)

    return (
        <Router>
            <Cart hidden={isCartHidden} onClick={() => setIsCartHidden(true)}/>
            <Header onClick={() =>handleClick(false)}/>
                <Routes>
                    <Route path="/" element={<Home />} />
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