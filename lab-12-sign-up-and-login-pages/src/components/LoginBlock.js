import React, { useContext } from "react";
import { Form, Formik } from "formik";
import { Button, Grid, Box, Typography } from "@mui/material";
import { validationLoginObject } from "./reusable/validationObjects";
import { CustomTextInput } from "./reusable/CustomTextInput";
import { centeredContainer } from "./styles";
import { BasicStyledLink } from "./reusable/StyledLinks";
import { userWithSuchValuesExists } from "./localStorageUtills";
import { UserContext } from "./UserContextProvider";
import { MessageContext } from "./MessageContextProvider";

export const LoginBlock = () => {
  const [loggedUserMail, setLoggedUserMail] = useContext(UserContext);
  const [message, setMessage] = useContext(MessageContext);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationLoginObject}
      onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          resetForm();
          console.log("Login inputs:", JSON.stringify(values));
          if(userWithSuchValuesExists(values)){
            localStorage.setItem("loggedUserMail", values.email);
            setLoggedUserMail(values.email);
          } else {
            setMessage("Check your email or password again.")
          }
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
                <Typography variant="h2">Login</Typography>
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
                <Grid container spacing={2}>
                  <Grid item>
                    <BasicStyledLink to="/signup">
                      <Button variant="outlined">Not a member? Sign up</Button>
                    </BasicStyledLink>
                  </Grid>
                  <Grid item>
                    <Button type="submit" variant="contained">
                      {props.isSubmitting ? "Loading" : "Login"}
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
