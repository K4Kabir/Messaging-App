import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { sampleNotification } from "../../constants/SampleData";

const Notification = () => {
  const friendRequestHandler = (id, action) => {};
  return (
    <Dialog open>
      <Stack p={"2rem"} width={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {sampleNotification.length < 0 ? (
          "0 Notification"
        ) : (
          <>
            {sampleNotification.map((n, i) => {
              return (
                <NotificationItem
                  key={i}
                  sender={n.sender}
                  _id={i.id}
                  handler={friendRequestHandler}
                />
              );
            })}
          </>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = ({ sender, _id, handler }) => {
  return (
    <ListItem>
      <Stack
        width={"100%"}
        s
        alignItems={"center"}
        direction={"row"}
        spacing={"1rem"}
      >
        <Avatar src={sender.avatar} />
        <Typography width={"100%"}>{sender.name}</Typography>
        <Button variant="outlined" onClick={() => handler(_id, "ACCEPT")}>
          Accept
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => handler(_id, "REJECT")}
        >
          Reject
        </Button>
      </Stack>
    </ListItem>
  );
};

export default Notification;
