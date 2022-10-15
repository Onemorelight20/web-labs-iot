import React from "react";
import { Route, Routes } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import Grid from "@mui/material/Grid";

import SearchBlock from "./SearchBlock";
import { logoTextStyle } from "../styles";
import { BasicStyledLink } from "../reusable/StyledLinks";

const NavigationBarMd = ({ pages }) => {
  let linksBody = pages.map((pageInfo) => {
    const [page, path] = pageInfo;

    return (
      <BasicStyledLink to={path}>
        <Button>{page}</Button>
      </BasicStyledLink>
    );
  });

  return (
    <Grid
      container
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <MovieFilterIcon />
        <Typography variant="h6" noWrap sx={{ ...logoTextStyle }}>
          FilmliF
        </Typography>
        <Box>{linksBody}</Box>
      </Grid>
      <Grid item>
        <Routes>
          <Route path="/catalog" element={<SearchBlock />}></Route>
        </Routes>
      </Grid>
    </Grid>
  );
};

export default NavigationBarMd;
