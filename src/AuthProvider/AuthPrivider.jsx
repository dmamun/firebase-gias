import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config';
export const AuthContext=createContext(null);
const googleProvider=new GoogleAuthProvider();

const AuthPrivider = ({children}) => {
    const [user,setUser]=useState("");

    //googleSignIn
    const googleSignUp=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    //email and password authentication signUp

    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //email and password authentication signIn
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    //onAuthStateChange

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        }

    },[]);

    //logOut

    const logOut=()=>{
        return signOut(auth)
    }



    const authentication={
        googleSignUp,
        signUp,
        signIn,
        logOut,
        user

    }
    
    return (
        <AuthContext.Provider value={authentication}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthPrivider;