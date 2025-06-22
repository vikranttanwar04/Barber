import { createContext, useContext, useState } from "react"

const authContext = createContext();

// Provider
const AuthProvider = ({children}) =>{

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return(
        <authContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </authContext.Provider>
    )
}

// Consumer
const useAuth = () => useContext(authContext);

export {useAuth, AuthProvider};