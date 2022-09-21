import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";

const averageIconFontSize = { fontSize: 40 };

export const FacebookIconStyled = styled(FacebookIcon)(() => ({
  ...averageIconFontSize,
  color: "#4267B2",
}));

export const InstagramIconStyled = styled(InstagramIcon)(() => ({
  ...averageIconFontSize,
  color: "#fb3958",
}));

export const LinkedInIconStyled = styled(LinkedInIcon)(() => ({
  ...averageIconFontSize,
  color: "#0A66C2",
}));

export const MovieFilterIconStyled = styled(MovieFilterIcon)(() => ({
  fontSize: 60,
}));
