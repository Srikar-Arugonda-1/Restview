import  { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            console.log("token", token);
            setUser(true);
        } 
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
