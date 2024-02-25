import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SampleUser } from "../../constants/SampleData";
import UserItem from "../shared/UserItem";

const Search = () => {
  const [user, setUser] = useState(SampleUser);
  const addFriendHandler = (id) => {
    console.log(id);
  };
  const isLoadingSendFriendRequest = false;
  return (
    <Dialog open>
      <Stack p={"2rem"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          type="text"
          label=""
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {user.map((u, index) => {
          return (
            <List>
              <UserItem
                key={index}
                avatar={u.avatar}
                user={u}
                handler={(id) => addFriendHandler(id)}
                handlerIsLoading={isLoadingSendFriendRequest}
              />
            </List>
          );
        })}
      </Stack>
    </Dialog>
  );
};

export default Search;
