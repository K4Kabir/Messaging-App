import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import React from "react";

const UserItem = ({ user, handler, handlerIsLoading, isSelected = false }) => {
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
          sx={{
            bgcolor: isSelected ? "error.main" : "primary.main",
            color: "white",
            "&:hover": { bgcolor: isSelected ? "error.dark" : "primary.dark" },
          }}
          onClick={() => handler(user.id)}
          disabled={handlerIsLoading}
          variant="contained"
        >
          {isSelected ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default UserItem;
