import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

function Cart() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
        <Typography>Here will be your items</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Cart;
