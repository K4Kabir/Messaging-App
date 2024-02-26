import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { grey } from "../../constants/Color";

export const CustomLink = styled(Link)({
  textDecoration: "none",
  color: "black",
  padding: "1rem",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.1)", // Change color on hover
  },
});

export const InputBox = styled("input")({
  width: "100%",
  height: "100%",
  border: "none",
  outline: "none",
  padding: "1rem",
  borderRadius: "1.3rem",
  backgroundColor: grey,
});
