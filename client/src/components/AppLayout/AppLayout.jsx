import { Grid } from "@mui/material";
import Header from "./Header";
import ChatList from "../specific/ChatList";
import { sampleChat } from "../../constants/SampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = (WrappedComponent) => {
  return (props) => {
    const { chatId } = useParams();
    const handleDeleteChat = (e, _id, groupChat) => {
      console.log(e, _id, groupChat);
    };
    return (
      <>
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList
              chats={sampleChat}
              chatId={chatId}
              newMessageAlert={[
                {
                  chatId: chatId,
                  count: 4,
                },
              ]}
              onlineUser={[1, 2]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{ display: { xs: "none", sm: "block" }, padding: "2rem" }}
            height={"100%"}
            bgcolor="#4b4f53"
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
