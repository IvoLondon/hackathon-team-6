import { ChatProps, ChatType } from "./Chat.types";
import * as Styled from "./styled";
import ContentfulRichTextCore from "@vfuk/core-contentful-rich-text";
import { SimpleCard } from "@vfuk/core-simple-card";

const Chat = ({ chat }: ChatProps) => {
  return (
    <Styled.ResponseContainer>
      {chat.map((chatData) => {
        return chatData.chatType ? (
          <Styled.User chatType={chatData.chatType}>
            <SimpleCard key={chatData.id} heading={{ text: chatData.text }} />
          </Styled.User>
        ) : (
          <Styled.Response chatType={chatData.chatType}>
            <SimpleCard key={chatData.id} heading={{ text: chatData.text }} />
          </Styled.Response>
        );
      })}
    </Styled.ResponseContainer>
  );
};

export default Chat;
