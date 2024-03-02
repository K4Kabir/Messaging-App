import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max} sx={{ px: 2 }}>
        {avatar?.map((a, i) => {
          return <Avatar key={i} src={a} />;
        })}
      </AvatarGroup>
      {/* <AvatarGroup max={max}>
        <Box width={"7rem"} height={"3rem"}>
          {avatar?.map((a, i) => {
            return (
              <Avatar
                key={i}
                src={a}
                sx={{
                  width: "3rem",
                  marginLeft: i * 5 + "px",
                  height: "3rem",
                  position: "absolute",
                }}
              />
            );
          })}
        </Box>
      </AvatarGroup> */}
    </Stack>
  );
};

export default AvatarCard;
