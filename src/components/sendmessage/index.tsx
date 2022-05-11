import { useContext, useState } from "react"
import { VscSignOut,VscGithubInverted } from "react-icons/vsc"
import { AuthContext } from "../../contexts/auth";
import styles from "./styles.module.scss"


export function SendMessageForm(){
    
    const {user,signOut} = useContext(AuthContext);

    const [message, SetMessage] = useState('');
    
    return (

        <div className={styles.sendMessageFormWrapper}>
            <button onClick={signOut} className={styles.signOutButton}>
                <VscSignOut size="32px"/>
            </button>
   
            <header className={styles.userInformation}>

                <div className={styles.userImage}>
                    <img src= "https://github.com/lopesjorge.png" alt="Jorge Lopes"/>
                </div>

                <strong className={styles.userName}> Jorge Lopes </strong>
                <span className={styles.userGithub}>
                    <VscGithubInverted/>
                    {user?.id}
                     lopesjorge 
                </span>

            </header>

            <form className={styles.sendMessageForm}>
                <label htmlFor="message">Mensagem</label>

                <textarea 
                name="message"
                id="message"
                placeholder="Deixe aqui sua mensagem!"

                onChange={event=>SetMessage(event.target.value)}
                value= {message}
                />

                <button type="submit">Enviar mensagem</button>
            </form>

        </div>
    )
}
