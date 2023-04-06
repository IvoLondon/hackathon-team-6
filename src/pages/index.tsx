import Chat from "../components/Chat";
import { ChatData, ChatType } from "../components/Chat.types";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import AppWrapper from "../components/AppWrapper";

import styles from "../page.module.css";

import SearchInput from "@vfuk/core-search-input";

export default function Home() {
  const [chat, setChat] = useState(new Array<ChatData>());
  const [session, setSession] = useState("");
  const [text, setText] = useState("");


  function modifyStyles() {
    const searchInput = document.querySelector('.SearchInputstyle__SearchInput-sc-hmi9vj-0.bTMSRo');
    searchInput.style.backgroundColor = '#F5F5F5';
    searchInput.style.border = '2px solid #F5F5F5';
    searchInput.style.borderRadius = '10px';
    searchInput.style.padding = '10px';
    searchInput.style.width = '100%';

    // const searchIcon = document.querySelector('.SearchTextInputstyle__SearchIcon-sc-6ru1tt-4.gGLjoE');
    // const button = document.createElement('button');
    // button.setAttribute('type', 'button');
    // button.setAttribute('aria-label', 'Search');
    // button.setAttribute('aria-disabled', 'false');
    // button.setAttribute('class', 'Interactionstyle__Button-sc-e1xkgc-0 fDJxJS IconButtonstyle__IconButton-sc-lsr68l-0 esPbyB');
    // button.setAttribute('id', 'search-input-trigger');
    // button.setAttribute('data-component-name', 'IconButton');
    
    const icon = document.createElement('span');
    icon.setAttribute('aria-hidden', 'true');
    icon.setAttribute('size', '3');
    icon.setAttribute('data-component-name', 'Icon');
    icon.setAttribute('class', 'Iconstyle__Icon-sc-1kjx3w9-0 cKShzW');
    
    const errorBox = document.createElement('span');
    errorBox.setAttribute('class', 'Iconstyle__ErrorPinkBox-sc-1kjx3w9-1 hrrbDl');
    
    const searchIcon = document.querySelector('.SearchTextInputstyle__SearchIcon-sc-6ru1tt-4.gGLjoE');
    const existingButton = searchIcon.querySelector('.Interactionstyle__Button-sc-e1xkgc-0');
    
    if (existingButton) {
      const newButton = document.createElement('button');
      newButton.setAttribute('type', 'button');
      newButton.setAttribute('aria-label', 'Search');
      newButton.setAttribute('aria-disabled', 'false');
      newButton.setAttribute('class', 'my-custom-button-class');
      newButton.setAttribute('id', 'search-input-trigger');
      newButton.setAttribute('data-component-name', 'IconButton');
      newButton.innerText = 'Ask';
      
      searchIcon.replaceChild(newButton, existingButton);
    }

    const askButton = document.querySelector('.test');
    askButton.style.display = 'none';
  
    // const label = document.querySelector('.FieldWrapperstyle__Label-sc-1exrao2-1.jjmcDL');
    // label.style.color = 'white';
    // label.style.fontSize = '16px';
  
    // const input = document.querySelector('.TextInputstyle__TextInput-sc-bg77me-1.bhdPYZ');
    // input.style.backgroundColor = 'transparent';
    // input.style.border = 'none';
    // input.style.color = 'white';
    // input.style.fontSize = '16px';
  

    // const animate = document.querySelector('.Animatestyle__Animate-sc-17pgmc7-0.cbaJbX');
    // animate.style.backgroundColor = '#FF6B6B';
  }
  
  useEffect(() => {
    setSession(uuid());
    modifyStyles(); // Call the modifyStyles function here
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
        <h1>Lex Test</h1>
        <h2>
          Session: {session}
          <button onClick={handleDeleteClick}>Delete</button>
        </h2>{" "}
        <input onChange={(e) => setText(e.target.value)} value={text} />
        <SearchInput
          textInput={{
            value: text,
            onChange: (e) => setText(e.target.value),
            id: "search-input",
          }}
          fieldWrapper={{
            width: "full",
            label: "Search",
            showLabel: false,
          }}
          onClear={() => setText("")}
        />
        <button onClick={handleAskClick}>Ask</button>
        <Chat chat={chat} />
      </main>
    </AppWrapper>
  );
}
