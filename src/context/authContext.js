import { createContext, useState, useEffect } from 'react'
import firebase, { provider } from '../firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null)

    const signUserIn = () => {
        firebase.auth().signInWithPopup(provider);
    }

    const signUserOut = () => {
        firebase.auth().signOut().then(() => {
            setUser(null)
        }).catch((error) => {
            console.log(error)
        })
    }

    const registerUser = () => {
        firebase.auth().onAuthStateChanged(user => setUser(user))
    }

    useEffect(() => {
        registerUser()
    }, [])

    const value = {
        user,
        setUser,
        signUserIn,
        signUserOut,
        registerUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;