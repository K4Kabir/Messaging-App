import { Stack } from "@mui/material";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUser = [],
  newMessageAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w}>
      {chats?.map((c, index) => {
        const { avatar, name, _id, groupChat, members } = c;
        const newMessagesAlert = newMessageAlert.find(
          ({ chatId }) => chatId == _id
        );
        const isOnline = members?.some((m) => onlineUser.includes(m));
        return (
          <ChatItem
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            index={index}
            sameSender={chatId == _id}
            groupChat={groupChat}
            newMessagesAlert={newMessagesAlert}
            isOnline={isOnline}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};
export default ChatList;
