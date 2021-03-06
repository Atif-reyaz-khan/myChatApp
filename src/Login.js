import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import {actionTypes} from "./reducer"
import "./Login.css"
import { useStateValue } from './StateProvider'
function Login() {
    const[{},dispatch]=useStateValue();
    function signIn(){
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            }); 
        })
        .catch((error)=>alert(error.message));
    }
    return (
        <div className="login">
            <div className="login_container">

            <img
src="data:image/png;base64,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"
            alt=""
            />
            <div className="login_text">
                <h1>sign in to whatsApp</h1>
            </div>
            <Button  onClick={signIn}>sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
