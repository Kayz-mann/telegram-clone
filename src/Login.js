import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import "./Login.css"

const Login = () => {
    
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }
    return (
        <div className="login">
           <div className="login__telegram">
               <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/150px-Telegram_2019_Logo.svg.png" alt="/telegram"  />
               <h1>Telegram</h1>
            </div> 
            <Button onClick={signIn}>SignIn</Button>
        </div>
    )
}

export default Login
