import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Typography variant="h5" p={"2rem"} textAlign={"center"}>
        Select a Friend to Chat
      </Typography>
    </Box>
  );
};

export default AppLayout(Home);
