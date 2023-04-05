import { ChatProps, ChatType } from './Chat.types'
import * as Styled from './styled'

const Chat = ({ chat }: ChatProps) => {
  return (
    <Styled.ResponseContainer>
      {chat.map(chatData => {
        return (
          <Styled.Response key={chatData.id} chatType={chatData.chatType}>
            {chatData.text}
          </Styled.Response>
        )
      })}
    </Styled.ResponseContainer>
  )
}

export default Chat
