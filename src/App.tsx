import { useContext } from "react"
import styles from "./App.module.scss"
import { LoginBox } from "./components/loginBox"
import { MessageList } from "./components/messageList"
import { SendMessageForm } from "./components/sendmessage"
import { AuthContext } from "./contexts/auth"

export function App() {
     
  const {user} = useContext(AuthContext)

  return (
    <main className={styles.ContentWrapper} >
       
           <MessageList/>

           {!!user ? <LoginBox/> : <SendMessageForm/>}
        </main>
    )
}


