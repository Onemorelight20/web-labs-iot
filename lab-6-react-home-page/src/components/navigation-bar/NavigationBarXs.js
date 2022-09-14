import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import Grid from "@mui/material/Grid";
import { logoTextStyle } from "../styles";

const NavigationBarXs = ({
  pages,
  handleOpenNavMenu,
  handleCloseNavMenu,
  anchorElNav,
}) => {
  return (
    <Grid
      container
      sx={{
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Grid item>
        <IconButton
          size="large"
          aria-label="account of current user"
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
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Grid>

      <Grid item sx={{ display: "flex", alignItems: "center" }}>
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
    </Grid>
  );
};

export default NavigationBarXs;
