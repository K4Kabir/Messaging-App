import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const CustomLink = styled(Link)({
  textDecoration: "none",
  color: "black",
  padding: "1rem",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.1)", // Change color on hover
  },
});
