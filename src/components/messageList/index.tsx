import {api} from "../../services/api"

import styles from "./styles.module.scss"

import logoImg from "../../assets/Slice 1.svg"

import { useEffect, useState } from "react"

type Message = {
    id: string;
    text: string;
    user:{
        name: string;
        avatar_url: string;
    }
}

export function MessageList(){
    
    const [messages, setMessage] = useState<Message[]>([]);

    useEffect(() => {
        api.get<Message[]>('messages/last3').then(response=>{
                setMessage(response.data);
        })
},[])
       

    return (
        <div className={styles.messageListWrapper}>
             <img src={logoImg} alt="portfolio" />

             <ul className={styles.messageList}>
               
               {messages.map(message =>{
                    return (
                        <li key={message.id} className={styles.message}>
                            <p className={styles.messageContent}>
                                {message.text}
                            </p>
                           <div className={styles.messageUser}>
                               <div className={styles.UserImg}>
                                   <img src={message.user.avatar_url} alt={message.user.name} />
                               </div>
                               <span>
                                    {message.user.name}
                               </span>
                           </div>
                    </li>
   
                 )
               }
            )}   
             </ul>
        </div>
    )
}