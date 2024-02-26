import React, { useState } from "react";
import { SampleUser } from "../../constants/SampleData";
import {
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  TextField,
} from "@mui/material";
import UserItem from "../shared/UserItem";

const NewGroup = () => {
  const [user, setUser] = useState(SampleUser);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const selectMemberHander = (id) => {
    let temp = selectedMembers;
    if (!temp.includes(id)) {
      setSelectedMembers((prev) => [...prev, id]);
    } else {
      temp = temp.filter((f) => f != id);
      setSelectedMembers(temp);
    }
  };

  console.log(selectedMembers);

  return (
    <Dialog open>
      <Stack p={"2rem"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Add Members</DialogTitle>
        <TextField
          type="text"
          label="Group Name"
          variant="outlined"
          size="small"
        />
        {user.map((u, index) => {
          return (
            <ListItem>
              <Stack
                width={"100%"}
                key={index}
                direction={"row"}
                spacing={"2rem"}
              >
                <UserItem
                  user={u}
                  key={index}
                  handler={(id) => selectMemberHander(id)}
                  isSelected={selectedMembers.includes(u.id)}
                />
              </Stack>
            </ListItem>
          );
        })}
        <Stack direction={"row"} spacing={"0.5rem"} sx={{ mt: 2 }}>
          <Button variant="outlined">Create</Button>
          <Button variant="outlined" color="error">
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
