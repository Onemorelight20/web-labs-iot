import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Button, Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { centeredContainer } from "./styles";
import { CustomTextInput } from "./reusable/CustomTextInput";
import { validationCheckoutObject } from "./reusable/validationObjects";
import { SuccessBlock } from "./SuccessBlock";

function FormBlock() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {success ? (
        <SuccessBlock />
      ) : (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address: "",
            createdOn: new Date(),
          }}
          validationSchema={validationCheckoutObject}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              setSuccess(true);
              setSubmitting(false);
              resetForm();
              console.log("Inputs:", JSON.stringify(values));
            }, 1000);
          }}
        >
          {(props) => (
            <Box sx={{ ...centeredContainer, pt: 3 }}>
              <Form>
                <Grid
                  container
                  spacing={3}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Grid item xs={12}>
                    <Typography variant="h2">Checkout</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CustomTextInput
                      label="First name"
                      name="firstName"
                      type="text"
                      placeholder="Georgiy"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CustomTextInput
                      label="Last name"
                      name="lastName"
                      type="text"
                      placeholder="Gongadze"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CustomTextInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="yourmail@gmail.com"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CustomTextInput
                      label="Phone number"
                      name="phoneNumber"
                      type="text"
                      placeholder="0955952422"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextInput
                      label="Address"
                      name="address"
                      type="text"
                      placeholder="Lviv, st. Shevchenko, 13"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Button variant="outlined" onClick={() => navigate(-1)}>
                          Go back
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button type="submit" variant="contained">
                          {props.isSubmitting ? "Loading" : "Submit"}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            </Box>
          )}
        </Formik>
      )}
    </>
  );
}

export default FormBlock;
