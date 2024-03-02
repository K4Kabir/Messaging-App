import { KeyboardBackspace } from "@mui/icons-material";
import {
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React, { memo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { CustomLink } from "../components/styles/StyledComponent";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChat } from "../constants/SampleData";

const Group = () => {
  const navigate = useNavigate();
  const [handleMobile, setHandleMobile] = useState(false);
  const chatId = useSearchParams()[0].get("group");
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sm={4}
        bgcolor={"bisque"}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <GroupList myGroups={sampleChat} chatId={chatId} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        <IconButton
          onClick={() => navigate("/")}
          sx={{
            bgcolor: "black",
            color: "white",
            position: "absolute",
            top: "1rem",
            left: "1rem",
            "&:hover": {
              bgcolor: "#383737",
            },
          }}
        >
          <KeyboardBackspace />
        </IconButton>
        <IconButton
          onClick={() => setHandleMobile(!handleMobile)}
          sx={{
            display: { xs: "block", sm: "none" },
            position: "absolute",
            top: "1rem",
            right: "1rem",
            alignItems: "center",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Grid>
      <Drawer
        sx={{ display: { xs: "block", sm: "none" } }}
        open={handleMobile}
        onClose={() => setHandleMobile(false)}
      >
        <GroupList width="50vw" myGroups={sampleChat} chatId={"kk"} />
      </Drawer>
    </Grid>
  );
};

const GroupList = ({ width = "100%", myGroups = [], chatId }) => {
  return (
    <Stack width={width}>
      {myGroups.length > 0 ? (
        myGroups.map((g, index) => {
          return <GroupItem group={g} key={index} openedGroupId={chatId} />;
        })
      ) : (
        <Typography textAlign={"center"} padding={"1rem"}>
          No Groups
        </Typography>
      )}
    </Stack>
  );
};

const GroupItem = memo(({ group, openedGroupId }) => {
  const { avatar, _id, name } = group;
  return (
    <CustomLink
      to={`?group=${_id}`}
      onClick={(e) => {
        if (openedGroupId == _id) {
          e.preventDefault();
        }
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </CustomLink>
  );
});

export default Group;
