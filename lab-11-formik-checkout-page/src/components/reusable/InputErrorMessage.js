import React, { useState } from "react";
import { useField } from "formik";
import { Typography } from "@mui/material";

export const InputErrorMessage = ({...props}) => {
  const [field, meta] = useField(props);

  return (
    <>
      {meta.touched && meta.error ? (
        <Typography style={{ color: "red" }}>{meta.error}</Typography>
      ) : null}
    </>
  );
};
