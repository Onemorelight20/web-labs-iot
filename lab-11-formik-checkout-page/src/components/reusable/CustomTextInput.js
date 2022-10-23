import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";
import { InputErrorMessage } from "./InputErrorMessage";

export const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextField
        label={label}
        variant="outlined"
        {...field}
        {...props}
        fullWidth
      />
      <InputErrorMessage {...props} />
    </>
  );
};
