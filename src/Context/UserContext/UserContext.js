import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
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


    const value = {
        user,
        loader,
        registerUser
    }
    return (
        <div>
            <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;