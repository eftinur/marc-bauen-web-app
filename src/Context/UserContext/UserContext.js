import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext(); 
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);

    const registerUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        setLoader(true);
        return updateProfile(auth.currentUser, profile)
    }

    const googleProvider = new GoogleAuthProvider();

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const value = {
        user,
        loader,
        registerUser,
        logIn,
        logOut,
        updateUserProfile,
        googleLogIn
    }
    return (
        <div>
            <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;