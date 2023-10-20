import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./context/cartContext";
import { ProductContextProvider } from "./context/productContext";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import AboutUs from "./pages/About";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/Contact";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import customTheme from "./theme";

const stripePromise = loadStripe(
  "pk_test_51Np2MYCWKOgUrWTno9rl41193R70qv3dDuXyhWkDPIW2Qu1mLv6IaIEIMrcFgQVwjbGRTLiV13GWw3H69CLhmJiZ00rv5sztZP"
);

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <ProductContextProvider>
        <CartProvider>
          <Header />
          <Elements stripe={stripePromise}>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Products" element={<Products />} />
              <Route path={"/Product"} element={<Product />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/About" element={<AboutUs />} />
              <Route path="/Contact" element={<ContactUs />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/FAQ" element={<FAQ />} />
            </Routes>
          </Elements>
          <Footer />
        </CartProvider>
      </ProductContextProvider>
    </ChakraProvider>
  );
}

export default App;