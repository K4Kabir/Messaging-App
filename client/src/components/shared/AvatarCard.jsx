import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"}>
          {avatar?.map((a, i) => {
            return (
              <Avatar
                key={Math.random() * 100}
                src={a}
                sx={{
                  width: "3rem",
                  height: "3rem",
                  position: "absolute",
                }}
              />
            );
          })}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
