import React from "react";
import FormBlock from "./components/FormBlock";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const CheckoutPage = () => {
  const filmIds = useSelector((state) => state.cart.value);

  if (filmIds.size == 0) {
    return <Navigate to="/catalog"></Navigate>;
  } else {
    return (
      <>
        <FormBlock />
      </>
    );
  }
};
