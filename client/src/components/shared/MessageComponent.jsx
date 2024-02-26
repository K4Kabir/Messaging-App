import { Box, Typography } from "@mui/material";
import { lightBlue } from "../../constants/Color";
import moment from "moment";
import { fileFormat } from "../../lib/Features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments, createdAt } = message;
  const timeAgo = moment(createdAt).fromNow();
  const sameSender = sender?._id == user?._id;
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography variant="caption" color={lightBlue} fontWeight={"600"}>
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}
      {/* Attachment */}

      {attachments.length > 0 &&
        attachments.map((a, index) => {
          const url = a.url;
          const file = fileFormat(url);
          console.log(url, file);
          return (
            <Box key={index}>
              <a href={url} target="_blank" download color="black">
                {<RenderAttachment file={file} url={url} />}
              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color={"text.secondary"}>
        {timeAgo}
      </Typography>
    </div>
  );
};

export default MessageComponent;
