import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import Toolbar from "@mui/material/Toolbar";
import { logoTextStyle } from "../styles";

const NavigationBarMd = ({ pages, handleCloseNavMenu }) => {
  return (
    <Toolbar disableGutters>
      
      <MovieFilterIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, alignSelf:"center" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ...logoTextStyle,
              display: { xs: "none", md: "flex" }, alignSelf:"center",
              flexGrow: 1
            }}
          >
            FilmliF
          </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 1, color: "white", display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box>
      
    </Toolbar>
  );
};

export default NavigationBarMd;
