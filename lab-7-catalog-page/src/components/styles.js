import { makeStyles } from "@material-ui/styles";

const logoTextStyle = {
  mr: 2,
  display: { xs: "flex", md: "none" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
};

const centeredContainer = {
  maxWidth: "xl",
  mx: "auto",
  p: 10,
};

const useStyles = makeStyles({
  bigImage: {
    height: "30vw",
    maxHeight: 400,
    minHeight: 300,
    borderRadius: 5,
    mx: "auto",
  },
});

export { useStyles, logoTextStyle, centeredContainer };
