import React, { createContext, useContext,useState } from 'react'
 import Cookies from 'js-cookie';


export const AuthContext = createContext();
export  const AuthProvider = ({children}) => {
    const initialUserState = Cookies.get("jwt") || localStorage.getItem("user");
    const [AuthUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : undefined);
  return (
    <AuthContext.Provider value={[AuthUser, setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);