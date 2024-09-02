import { useContext, createContext, useEffect, useState } from "react";
import { api } from "../services/api";


export const AuthContext = createContext({})


function AuthProvider({children}) {
    const [user, setUser] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [data, setData] = useState({});

    async function signIn({email, password}) {
        const response = await api.post("/auth/show", {email, password});

        if(response.data.isAdmin === "1") {
            setAdmin(!admin)
        }
        
        
        setUser(!user)
        localStorage.setItem("@food_explorer:user", JSON.stringify(response.data))

    }

    async function signOut() {
        localStorage.removeItem("@food_explorer:user")
        setUser(!user)
    }



    return (
        <AuthContext.Provider value={{signIn, signOut,user, admin}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context
}

export {AuthProvider, useAuth}