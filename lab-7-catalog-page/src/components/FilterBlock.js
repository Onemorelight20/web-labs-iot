import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { PriceSelector } from "./filter/PriceSelector";
import { ReviewsAmountSelector } from "./filter/ReviewsAmountSelector";
import { FilmLengthSelector } from "./filter/FilmLengthSelector";

export function FilterBlock() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <PriceSelector />
      </Grid>
      <Grid item>
        <ReviewsAmountSelector />
      </Grid>
      <Grid item>
        <FilmLengthSelector />
      </Grid>
      <Grid item sx={{ ml: "auto", my: "auto" }}>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="outlined" color="primary">
              Apply
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="error">
              Discard
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
