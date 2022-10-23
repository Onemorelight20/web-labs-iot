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
import { CheckoutPage } from "./CheckoutPage";
import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage";
import Protected from "./components/Protected";

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
                    <Route path="login" element={<LoginPage />}></Route>
                    <Route path="signup" element={<SignupPage />}></Route>
                    <Route
                      index
                      element={
                        <Protected isLoggedIn={false}>
                          <HomePage />
                        </Protected>
                      }
                    ></Route>
                    <Route
                      path="catalog"
                      element={
                        <Protected isLoggedIn={false}>
                          <Catalog />
                        </Protected>
                      }
                    ></Route>
                    <Route
                      path="cart"
                      element={
                        <Protected isLoggedIn={false}>
                          <Cart />
                        </Protected>
                      }
                    ></Route>
                    <Route
                      path="item/:id"
                      element={
                        <Protected isLoggedIn={false}>
                          <ItemDetailedView />
                        </Protected>
                      }
                    ></Route>
                    <Route
                      path="checkout"
                      element={
                        <Protected isLoggedIn={false}>
                          <CheckoutPage />
                        </Protected>
                      }
                    ></Route>
                    <Route
                      path="*"
                      element={
                        <Protected isLoggedIn={false}>
                          <HomePage />
                        </Protected>
                      }
                    ></Route>
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
