import { Avatar, Stack, Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} alignItems={"center"}>
      <Avatar sx={{ width: "5rem", height: "5rem", objectFit: "contain" }} />
      <ProfileCard
        heading={"Bio"}
        text={"This is my Bio"}
        icon={<FaceIcon />}
      />
      <ProfileCard
        heading={"Username"}
        text={"kabirmalv"}
        icon={<AlternateEmailIcon />}
      />
      <ProfileCard
        heading={"Name"}
        text={"Kabir Malviya"}
        icon={<CalendarMonthIcon />}
      />
      <ProfileCard
        heading={"Joined"}
        text={moment("2024-02-25T07:50:22.126Z").fromNow()}
        icon={<CalendarMonthIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      spacing={"1rem"}
      color={"white"}
      alignItems={"center"}
    >
      {icon && icon}
      <Stack textAlign={"center"}>
        <Typography color={"white"}>{text}</Typography>
        <Typography color={"grey"} variant="caption">
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
