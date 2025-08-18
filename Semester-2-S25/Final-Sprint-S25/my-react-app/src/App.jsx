import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/home";
import { Inquire } from "./Pages/Inquire/inquire";
import { Shop } from "./Pages/Shop/shop";
import { Details } from "./Pages/Details/details";
import { Cart } from "./Pages/Cart/cart";
import { Checkout } from "./Pages/Checkout/checkout";

import "@fontsource/hedvig-letters-serif";
import "@fontsource/averia-serif-libre";
import { useState } from "react";
import { CartContextProvier } from "./CartContext";
import { PostCheckout } from "./Pages/PostCheckout/PostCheckout";

function App() {
  return (
    <CartContextProvier>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* root route */}
          <Route path="/home" element={<Home />} />
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/details/:itemId" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/PostCheckout" element={<PostCheckout />} />
        </Routes>
      </Router>
    </CartContextProvier>
  );
}

export default App;
