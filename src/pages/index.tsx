import Chat from '../components/Chat'
import { ChatData, ChatType } from '../components/Chat.types'
import { ThemeProvider } from 'styled-components'
import themeWS10 from '@vfuk/core-theme-ws10'
import { useEffect, useState } from 'react'
import i18n from 'i18next'
import { v4 as uuid } from 'uuid'
import styles from '../page.module.css'
import { english } from '@vfuk/core-language-packs'

import { initReactI18next, I18nextProvider } from 'react-i18next'
import intervalPlural from 'i18next-intervalplural-postprocessor'

import SearchInput from '@vfuk/core-search-input'

i18n
  .use(initReactI18next)
  .use(intervalPlural)
  .init({
    resources: {
      en: {
        translation: english
      }
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  })

export default function Home() {
  const [chat, setChat] = useState(new Array<ChatData>())
  const [session, setSession] = useState('')
  const [text, setText] = useState('')
  useEffect(() => {
    setSession(uuid())
  }, [])
  const handleAskClick = async () => {
    const fetchLex = await fetch(`./api/lex?session=${session}&text=${text}`)
    const lex = await fetchLex.json()

    if (lex.messages) {
      setChat([
        ...chat,
        { id: uuid(), chatType: ChatType.Request, text },
        ...lex.messages.map(
          (message: { content: string; contentType: string }) => ({
            id: uuid(),
            chatType: ChatType.Response,
            text: message.content
          })
        )
      ])
    } else {
      setChat([
        ...chat,
        { id: uuid(), chatType: ChatType.Request, text },
        {
          id: uuid(),
          chatType: ChatType.Response,
          text: lex.sessionState.intent.confirmationState
        }
      ])
    }
    setText('')
  }
  const handleDeleteClick = async () => {
    await fetch(`/api/lex?session=${session}`)
    setChat(new Array<ChatData>())
    setSession(uuid())
  }
  return (
    <ThemeProvider theme={themeWS10}>
      <I18nextProvider i18n={i18n}>
        <main className={styles.main}>
          <Chat chat={chat} />
          <input onChange={e => setText(e.target.value)} value={text} />
          <SearchInput
            textInput={{
              value: text,
              onChange: e => setText(e.target.value),
              id: 'search-input'
            }}
            fieldWrapper={{
              width: 'default',
              label: 'Search',
              showLabel: false
            }}
            onClear={() => setText('')}
          />
          <button onClick={handleAskClick}>Ask</button>
        </main>
      </I18nextProvider>
    </ThemeProvider>
  )
}
