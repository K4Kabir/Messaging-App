import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, useState, lazy } from "react";
import { orange } from "../../constants/Color";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
const SearchDialog = lazy(() => import("../specific/SearchDialog"));
const NotificationDialog = lazy(() => import("../specific/Notification"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleOpenSearch = () => setIsSearch((prev) => !prev);
  const handleMobile = () => setIsMobile((prev) => !prev);
  const handleNewGroup = () => setIsNewGroup((prev) => !prev);
  const handleNotification = () => setIsNotification((prev) => !prev);

  return (
    <>
      <Box height={"4em"}>
        <AppBar sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h5"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chat App
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton>
                <MenuIcon onClick={handleMobile} />
              </IconButton>
            </Box>
            <Box sx={{ marginLeft: "auto" }}>
              <Box>
                <NavigateIcon
                  title={"Search"}
                  Icon={SearchIcon}
                  handler={handleOpenSearch}
                />
                <NavigateIcon
                  title={"Add"}
                  Icon={AddIcon}
                  handler={handleNewGroup}
                />
                <NavigateIcon
                  title={"Manage Group"}
                  Icon={GroupIcon}
                  handler={() => navigate("/group")}
                />
                <NavigateIcon
                  title={"Notification"}
                  Icon={NotificationsIcon}
                  handler={handleNotification}
                />
                <NavigateIcon
                  title={"Logout"}
                  Icon={LogoutIcon}
                  handler={() => navigate("/group")}
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

const NavigateIcon = ({ title, Icon, handler }) => {
  return (
    <Tooltip title={title}>
      <IconButton onClick={() => handler()}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

export default Header;
