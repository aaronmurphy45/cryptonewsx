import React from 'react'
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle } from '../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';


export default function Root() {
    const [user,loading] = useAuthState(auth);
    const history = useNavigate();
    const LoginPage = () => {
        window.location = "/cryptonews/login/";
        //window.location = "/cryptonews/login/";
    }
    const RegisterPage = () => {
        //window.location = "/cryptonews/register";
        window.location = "register";
    }
    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user){
            history("/homepage");
            console.log("user is logged in")
        }
        }, []);
    
    const buttonStyle = {
        backgroundColor: "purple",
        color: "white",
        border: "none",
        padding: "10px 15px",
        borderRadius: "3px",
        cursor: "pointer",
        float: "right",
        margin: "10px"
    }
    return (
        <div style = {{width: "100%" , backgroundColor:"#656176"}} >
            <h1>WELCOME TO CRYPTO NEWS</h1>
           
            <button style = {buttonStyle} onClick = {LoginPage}>Login</button>
            <button style = {buttonStyle} onClick = {RegisterPage}>Register</button>

        </div>
    )
}
