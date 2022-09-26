import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NavigationBarMd from "./NavigationBarMd";
import NavigationBarXs from "./NavigationBarXs";

const pages = [["Home", "/"], ["Catalog", "catalog"], ["Cart", "cart"]];

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#2E3B55" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavigationBarMd
            pages={pages}
            handleCloseNavMenu={handleCloseNavMenu}
          />
          <NavigationBarXs
            pages={pages}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
