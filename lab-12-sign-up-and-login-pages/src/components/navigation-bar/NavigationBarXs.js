import React, { useContext } from "react";
import { IconButton, Button, Typography, Menu, MenuItem, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { BasicStyledLink } from "../reusable/StyledLinks";
import SearchBlock from "./SearchBlock";
import { logoTextStyle } from "../styles";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../UserContextProvider";
import { MessageContext } from "../MessageContextProvider";

const NavigationBarXs = ({
  pages,
  handleOpenNavMenu,
  handleCloseNavMenu,
  anchorElNav,
}) => {
  const menuItems = pages.map((pageInfo) => {
    const [page, path] = pageInfo;

    return (
      <BasicStyledLink to={path}>
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      </BasicStyledLink>
    );
  });
  const [loggedUserMail, setLoggedUserMail] = useContext(UserContext);
  const [message, setMessage] = useContext(MessageContext);

  return (
    <Grid
      container
      sx={{
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={6}>
        <IconButton
          size="large"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          keepMounted
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {menuItems}
          {loggedUserMail != null && loggedUserMail != "" ? (
            <MenuItem>
              <Button
                onClick={() => {
                  setLoggedUserMail(null);
                  localStorage.removeItem("loggedUserMail");
                  setMessage("Successfully logged out.");
                }}
              >
                Log out
              </Button>
            </MenuItem>
          ) : (
            <div></div>
          )}
        </Menu>
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <MovieFilterIcon />
        <Typography
          variant="h5"
          component="a"
          href=""
          sx={{
            ...logoTextStyle,
          }}
        >
          FilmliF
        </Typography>
      </Grid>
      <Routes>
        <Route
          path="/catalog"
          element={
            <Grid xs={8} sx={{ mb: 2 }}>
              <SearchBlock />
            </Grid>
          }
        ></Route>
      </Routes>
    </Grid>
  );
};

export default NavigationBarXs;
