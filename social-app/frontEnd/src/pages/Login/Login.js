import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import authApi from "../../apis/authAPI";
import AuthContext from "../../contexts/AuthContext/AuthContext";
const Login = () => {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    const navigate = useNavigate();
    const { handleLogin, auth } = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            try {
                setLoading(true);
                setErr(null);
                const response = await authApi.login(values);

                const { token } = response.data;

                localStorage.setItem("accessToken", token);

                await handleLogin();

                navigate("/");
            } catch (error) {
                console.log("🚀 ~ file: Login.js:19 ~ onSubmit: ~ error:", error);
                setErr(error.response.data.message);
            } finally {
                setLoading(false);
            }
        },
    });

    const { handleSubmit, handleChange, values } = formik;

    if (auth.isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h4>Hello, Welcome back to KBook</h4>
                <div className="form-item">
                    <label htmlFor="email">Email: </label>
                    <input name="email" id="email" onChange={handleChange} value={values.email} />
                </div>

                <div className="form-item">
                    <label htmlFor="password">Password: </label>
                    <input name="password" id="password" onChange={handleChange} value={values.password} />
                </div>
                {err && <p>{err}</p>}
                <button type="submit">{loading ? "Loading..." : "Login"}</button>
            </form>
        </div>
    );
};

export default Login;
