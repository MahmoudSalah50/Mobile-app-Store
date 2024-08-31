import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Fotter from "./Components/Fotter";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

function App() {
  const location = useLocation();
  const showFooter = !['/cart', '/checkout'].includes(location.pathname);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showFooter && <Fotter />}
    </>
  );
}

export default App;
