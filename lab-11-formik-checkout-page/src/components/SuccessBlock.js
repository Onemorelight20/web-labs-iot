import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Grid, Typography, Button } from "@mui/material";
import { BasicStyledLink } from "./reusable/StyledLinks";

export const SuccessBlock = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <FavoriteIcon color="error" style={{ fontSize: 200 }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Success!</Typography>
          <Typography>Your order was sent to processing.</Typography>
        </Grid>
        <Grid item xs={3}>
          <BasicStyledLink to="/catalog">
            <Button variant="contained">Back to catalog</Button>
          </BasicStyledLink>
        </Grid>
      </Grid>
    </>
  );
};
