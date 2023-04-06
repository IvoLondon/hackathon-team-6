import { ChatData, ChatType } from "../components/Chat.types";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Chat from "../components/Chat";
import AppWrapper from "../components/AppWrapper";
import SearchInput from "../components/SearchInput";

import styles from "../page.module.css";

export default function Home() {
  const [chat, setChat] = useState(new Array<ChatData>());
  const [session, setSession] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setSession(uuid());
  }, []);
  const handleAskClick = async () => {
    const fetchLex = await fetch(`./api/lex?session=${session}&text=${text}`);
    const lex = await fetchLex.json();

    if (lex.messages) {
      setChat([
        ...chat,
        { id: uuid(), chatType: ChatType.Request, text },
        ...lex.messages.map(
          (message: { content: string; contentType: string }) => ({
            id: uuid(),
            chatType: ChatType.Response,
            text: message.content,
          })
        ),
      ]);
    } else {
      setChat([
        ...chat,
        { id: uuid(), chatType: ChatType.Request, text },
        {
          id: uuid(),
          chatType: ChatType.Response,
          text: lex.sessionState.intent.confirmationState,
        },
      ]);
    }
    setText("");
  };
  const handleDeleteClick = async () => {
    await fetch(`/api/lex?session=${session}`);
    setChat(new Array<ChatData>());
    setSession(uuid());
  };
  return (
    <AppWrapper>
      <main className={styles.main}>
        <h1>T0-B1</h1>
        <Chat chat={chat} />
        <SearchInput
          handleAskClick={handleAskClick}
          setText={setText}
          text={text}
        />
      </main>
    </AppWrapper>
  );
}
