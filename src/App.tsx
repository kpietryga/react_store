import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import TopBar from "./components/TopBar";

const App = () => {
    return (
        <Router>
            <TopBar />
            <Menu />
            <main className="max-w-screen-xl mx-auto text-center p-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;