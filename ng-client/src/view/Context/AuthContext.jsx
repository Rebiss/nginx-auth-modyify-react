import React, {useContext, useState, useEffect } from 'react';
import { auth } from '../../service/firebase';

const AuthContext = React.createContext();

export const useAuth = () => { 
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password);
    const login = (email, password) => auth.signInWithEmailAndPassword(email, password);
    const logout = () => auth.signOut();
    const resetPass = (email) => auth.sendPasswordResetEmail(email);
    const updateEmail = email => currentUser.updateEmail(email);
    const updatePass = password => currentUser.updatePassword(password);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [])
    

    const value = { currentUser, signup, login, logout, resetPass, updateEmail, updatePass};
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}