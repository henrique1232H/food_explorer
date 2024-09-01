import { useContext, createContext, useEffect, useState } from "react";
import { api } from "../services/api";


export const AuthContext = createContext({})


function AuthProvider({children}) {
    const [user, setUser] = useState(false);
    const [admin, setAdmin] = useState(false);

    async function signIn({email, password}) {
        const response = await api.post("/auth/show", {email, password});
        console.log(response.data)

        if(response.data.isAdmin === "1") {
            setAdmin(!admin)
        }
        
        setUser(!user)

    }


    return (
        <AuthContext.Provider value={{signIn, user, admin}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context
}

export {AuthProvider, useAuth}