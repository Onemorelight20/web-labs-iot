import React, { useState } from "react";
import FormBlock from "./components/FormBlock";
import { SuccessBlock } from "./components/SuccessBlock";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const CheckoutPage = () => {
  const [success, setSuccess] = useState(false);
  const filmIds = useSelector((state) => state.cart.value);

  return (
    <>
      {success ? (
        <SuccessBlock />
      ) : (
        <FormBlock successState={[success, setSuccess]} />
      )}
    </>
  );
};
