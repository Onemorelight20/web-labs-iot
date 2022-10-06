import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import Grid from "@mui/material/Grid";
import { BasicStyledLink } from "../reusable/StyledLinks";
import SearchBlock from "./SearchBlock";
import { logoTextStyle } from "../styles";
import { Route, Routes } from "react-router-dom";

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