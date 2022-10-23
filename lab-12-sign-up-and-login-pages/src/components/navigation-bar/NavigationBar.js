import React, { useContext } from "react";
import { AppBar, Toolbar, Container, Alert } from "@mui/material";
import NavigationBarMd from "./NavigationBarMd";
import NavigationBarXs from "./NavigationBarXs";
import { MessageContext } from "../MessageContextProvider";

const pages = [
  ["Home", "/"],
  ["Catalog", "catalog"],
  ["Cart", "cart"],
];

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [message, setMessage] = useContext(MessageContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const messageOutput = (message != null ? (
    <>
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Alert severity="info">{message}</Alert>
        {(() => {
          setTimeout(() => {
            setMessage(null);
          }, 4000);
        })()}
      </Container>
    </>
  ) : (
    <div></div>
  ));

  return (
    <>
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
      {messageOutput}
    </>
  );
};
export default NavigationBar;
