import axios from "axios";
import { useEffect, useState } from "react";
import authApi from "../../apis/authAPI";
import AuthContext from "./AuthContext";

const AuthState = ({ children }) => {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        authInfo: {},
    });

    const handleLogin = async () => {
        try {
            const response = await authApi.authInfo();
            const data = response.data;

            setAuth({
                isAuthenticated: true,
                authInfo: data.userInfo,
            });
        } catch (error) {
            console.log("🚀 ~ file: AuthState.js:14 ~ handleLogin ~ error:", error);
        }
    };

    const handleLogOut = () => {
        setAuth({
            isAuthenticated: false,
            authInfo: {},
        });
    };

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            handleLogin();
        }
    }, []);

    return <AuthContext.Provider value={{ auth, handleLogin, handleLogOut }}>{children}</AuthContext.Provider>;
};

export default AuthState;
