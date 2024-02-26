import React, { useRef } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { InputBox } from "../components/styles/StyledComponent";
import { orange } from "../constants/Color";

const Chat = () => {
  const containerRef = useRef();
  return (
    <>
      <Stack
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"#e4e4e4"}
        height={"90%"}
        ref={containerRef}
        sx={{ overflowX: "hidden", overflowY: "auto" }}
      ></Stack>
      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          width={"100%"}
          p={"0.3rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              rotate: "-30deg",
            }}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type message here !" />
          <IconButton
            type="submit"
            sx={{
              backgroundColor: orange,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
    </>
  );
};

export default AppLayout(Chat);
