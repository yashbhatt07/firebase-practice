import React from 'react'
import { Button } from 'react-bootstrap';
import {auth,googleProvider} from '../Config/firebase'
import {useState} from "react"
import {createUserWithEmailAndPassword,signInWithPopup, signOut} from 'firebase/auth';

const Auth = () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("")

    
    const signIn = async(event) => {
        event.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth,email,password)

        }catch(err){
            console.log(err)
        }
    }
    const signInWIthGoogle = async(event) => {
        event.preventDefault();
        try{
            await signInWithPopup(auth,googleProvider)

        }catch(err){
            console.log(err)
        }
    }
    const logout = async(event) => {
        event.preventDefault();
        try{
            await signOut(auth)

        }catch(err){
            console.log(err)
        }
    }
    return (
        <div>   
            <form>
        <label>Email address</label>
        <input type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
        <label>  Password</label>
        <input type="password" placeholder="Enter Password"  onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={signIn}>Sign In</button>
      <button onClick={signInWIthGoogle}>Sign In with Google</button>
      <button onClick={logout}>Logout</button>
    </form>

        </div>
    )
}

export default Auth
