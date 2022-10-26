import React from "react";
import { Provider } from "react-redux";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import HomePage from "./HomePage";
import Catalog from "./Catalog";
import Cart from "./Cart";
import FooterBlock from "./components/FooterBlock";
import ItemDetailedView from "./components/reusable/ItemDetailedView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "normalize.css";
import store from "./redux/store";
import { CheckoutPage } from "./CheckoutPage";
import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage";
import Protected from "./components/Protected";
import Unprotected from "./components/Unprotected";
import { ContextsWrapper } from "./ContextsWrapper";

function App() {
  return (
    <>
      <Provider store={store}>
        <ContextsWrapper>
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
        </ContextsWrapper>
      </Provider>
    </>
  );
}

export default App;
