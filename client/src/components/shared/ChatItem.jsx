import React, { memo } from "react";
import { CustomLink } from "../styles/StyledComponent";
import { Box, Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  newMessagesAlert,
  isOnline,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <CustomLink
      sx={{ padding: 0 }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}
      >
        <AvatarCard max={6} avatar={avatar} />
        <Stack>
          <Typography>{name}</Typography>
          {newMessagesAlert && (
            <Typography>{newMessagesAlert.count} New Message</Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#7bde7b",
              position: "absolute",
              top: "1rem",
              right: "1rem",
            }}
          ></Box>
        )}
      </div>
    </CustomLink>
  );
};

export default memo(ChatItem);
