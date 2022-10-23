import React from "react";
import { Provider } from "react-redux";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import HomePage from "./HomePage";
import Catalog from "./Catalog";
import Cart from "./Cart";
import FooterBlock from "./components/FooterBlock";
import ItemsContextProvider from "./components/ItemsContextProvider";
import UserContextProvider from "./components/UserContextProvider";
import MessageContextProvider from "./components/MessageContextProvider";
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
import Unprotected from "./components/Unprotected";

function App() {
  return (
    <>
      <Provider store={store}>
        <UserContextProvider>
          <MessageContextProvider>
            <ItemsContextProvider>
              <FiltersContextProvider>
                <SearchBlockContextProvider>
                  <BrowserRouter>
                    <NavigationBar />
                    <Routes>
                      <Route path="/">
                        <Route
                          path="login"
                          element={
                            <Unprotected>
                              <LoginPage />
                            </Unprotected>
                          }
                        ></Route>
                        <Route
                          path="signup"
                          element={
                            <Unprotected>
                              <SignupPage />
                            </Unprotected>
                          }
                        ></Route>
                        <Route
                          index
                          element={
                            <Protected>
                              <HomePage />
                            </Protected>
                          }
                        ></Route>
                        <Route
                          path="catalog"
                          element={
                            <Protected>
                              <Catalog />
                            </Protected>
                          }
                        ></Route>
                        <Route
                          path="cart"
                          element={
                            <Protected>
                              <Cart />
                            </Protected>
                          }
                        ></Route>
                        <Route
                          path="item/:id"
                          element={
                            <Protected>
                              <ItemDetailedView />
                            </Protected>
                          }
                        ></Route>
                        <Route
                          path="checkout"
                          element={
                            <Protected>
                              <CheckoutPage />
                            </Protected>
                          }
                        ></Route>
                        <Route
                          path="*"
                          element={
                            <Protected>
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
          </MessageContextProvider>
        </UserContextProvider>
      </Provider>
    </>
  );
}

export default App;
