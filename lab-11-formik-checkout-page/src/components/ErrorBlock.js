import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function ErrorBlock({errorCode, text}) {
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
          <Typography variant="h2">
                Error {errorCode}
          </Typography>
          <Typography variant="body1">
                {text}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default ErrorBlock;
