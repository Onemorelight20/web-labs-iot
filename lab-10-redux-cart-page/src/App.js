import React from "react";
import { Provider } from "react-redux";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import HomePage from "./HomePage";
import Catalog from "./Catalog";
import Cart from "./Cart";
import FooterBlock from "./components/FooterBlock";
import ItemsContextProvider from "./components/ItemsContextProvider";
import ItemDetailedView from "./components/reusable/ItemDetailedView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FiltersContextProvider from "./components/FiltersContextProvider";
import "normalize.css";
import SearchBlockContextProvider from "./components/navigation-bar/SearchBlockContextProvider";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
      <ItemsContextProvider>
        <FiltersContextProvider>
          <SearchBlockContextProvider>
            <BrowserRouter>
              <NavigationBar />
              <Routes>
                <Route path="/">
                  <Route index element={<HomePage />}></Route>
                  <Route path="catalog" element={<Catalog />}></Route>
                  <Route path="cart" element={<Cart />}></Route>
                  <Route path="item/:id" element={<ItemDetailedView />}></Route>
                  <Route path="*" element={<HomePage />}></Route>
                </Route>
              </Routes>
            </BrowserRouter>
            <hr />
            <FooterBlock />
          </SearchBlockContextProvider>
        </FiltersContextProvider>
      </ItemsContextProvider>
      </Provider>
    </>
  );
}

export default App;
