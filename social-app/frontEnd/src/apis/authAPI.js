import axios from "axios";
import axiosInstance from "./axiosInstance";

const authApi = {
    login: (values) => axiosInstance.post("/auth/login", values),
    register: (values) => axiosInstance.post("/auth/register", values),
    authInfo: () => axiosInstance.get("/auth/me"),
};

export default authApi;
