import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // new user create
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user login
    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logIn with google 
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    // sign in with github
    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, providerGithub);
    }
    // Update user info
    const updateUser = (name, photoUrl)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoUrl
        });
    }
    // User monitoring profile
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            setLoading(true);
            if(user){
                setUser(user);
            }else{
                setUser(null);
            }
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    // Sign out user
    const LogOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    const authInfo = {
        user,
        setUser,
        createUser,
        signIn,
        updateUser,
        LogOut,
        loading,
        setLoading,
        signInWithGoogle,
        signInWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;