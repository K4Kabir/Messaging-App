import {
  Avatar,
  Button,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const UserItem = ({ user, handler, handlerIsLoading }) => {
  return (
    <ListItem>
      <Stack
        width={"100%"}
        alignItems={"center"}
        direction={"row"}
        spacing={"1rem"}
      >
        <Avatar src={user.avatar} />
        <Typography width={"100%"}>{user.name}</Typography>
        <IconButton
          sx={{ bgcolor: "grey" }}
          onClick={() => handler(user.id)}
          disabled={handlerIsLoading}
          variant="contained"
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default UserItem;
