import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Products from "./components/pages/Products";
import NotFound from "./components/pages/NotFound";
import Offer from "./components/pages/Offer.tsx";
import Cart from "./components/common/Cart.tsx";
import Checkout from "./components/pages/Checkout.tsx";
// import TopTitle from "./components/common/TopTitle.tsx";

const App = () => {
    return (
        <Router>
            <Cart/>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
        </Router>
    );
};

export default App;