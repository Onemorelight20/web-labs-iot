import React, { useContext } from "react";
import { Form, Formik } from "formik";
import { Button, Grid, Box, Typography } from "@mui/material";
import { validationSignupObject } from "./reusable/validationObjects";
import { CustomTextInput } from "./reusable/CustomTextInput";
import { centeredContainer } from "./styles";
import { BasicStyledLink } from "./reusable/StyledLinks";
import { addUser } from "./localStorageUtills";
import { MessageContext } from "./MessageContextProvider";

export const SignupBlock = () => {
  const [, setMessage] = useContext(MessageContext);

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      }}
      validationSchema={validationSignupObject}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        resetForm();
        console.log("Signup inputs:", JSON.stringify(values));
        addUser(values).then(window.history.pushState({}, undefined, "/login"));
        setMessage("Successfully signed in. Now you can log in.");
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
                <Typography variant="h2">Sign up</Typography>
              </Grid>
              <Grid item xs={12}>
                <CustomTextInput
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="username"
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="yourmail@gmail.com"
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextInput
                  label="Password"
                  name="password"
                  type="text"
                  placeholder="password"
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextInput
                  label="Confirm password"
                  name="passwordConfirmation"
                  type="text"
                  placeholder="confirm password"
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item>
                    <BasicStyledLink to="/login">
                      <Button variant="outlined">
                        Already a member? Log in
                      </Button>
                    </BasicStyledLink>
                  </Grid>
                  <Grid item>
                    <Button type="submit" variant="contained">
                      {props.isSubmitting ? "Loading" : "Sign up"}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Box>
      )}
    </Formik>
  );
};
