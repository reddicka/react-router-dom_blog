import {createContext, useState} from "react";


// создаем контекст
export const AuthContext = createContext(null)

// оборачиваем провайдером контекста
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const signIn = (newUser, callback) => {
        setUser(newUser)
        callback()
    }

    const signOut = (callback) => {
        setUser(null)
        callback()
    }

    const value = {user, signIn, signOut}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}