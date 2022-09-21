import React from "react";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import HomePage from "./HomePage";
import Catalog from "./Catalog";
import Cart from "./Cart";
import FooterBlock from "./components/FooterBlock";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "normalize.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />}></Route>
            <Route path="catalog" element={<Catalog />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="*" element={<HomePage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <hr />
      <FooterBlock />
    </>
  );
}

export default App;
