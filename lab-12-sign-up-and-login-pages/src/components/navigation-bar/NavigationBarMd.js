import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import Grid from "@mui/material/Grid";

import SearchBlock from "./SearchBlock";
import { logoTextStyle } from "../styles";
import { BasicStyledLink } from "../reusable/StyledLinks";
import { UserContext } from "../UserContextProvider";
import { MessageContext } from "../MessageContextProvider";

const NavigationBarMd = ({ pages }) => {
  const [loggedUserMail, setLoggedUserMail] = useContext(UserContext);
  const [message, setMessage] = useContext(MessageContext);

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
        <Grid container spacing={2}>
          <Grid item>
            <Routes>
              <Route path="/catalog" element={<SearchBlock />}></Route>
            </Routes>
          </Grid>
          {loggedUserMail != null && loggedUserMail != "" ? (
            <Grid item>
              <Button
                onClick={() => {
                  setLoggedUserMail(null);
                  localStorage.removeItem("loggedUserMail");
                  setMessage("Successfully logged out.");
                }}
              >
                Log out
              </Button>
            </Grid>
          ) : (
            <div></div>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavigationBarMd;
