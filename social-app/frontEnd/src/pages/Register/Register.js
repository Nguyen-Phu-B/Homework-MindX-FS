import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import { useFormik } from "formik";
import authApi from "../../apis/authAPI";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            try {
                setLoading(true);
                setError(null);
                await authApi.register(values);

                // Redirect to homepage
                navigate("/login");
            } catch (error) {
                console.log(error);
                setError(error.response.data.message);
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
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Register KBook</h4>
                <div className="form-item">
                    <label htmlFor="fullname">Fullname</label>
                    <input name="fullname" id="fullname" onChange={handleChange} value={values.fullname} />
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" onChange={handleChange} value={values.email} />
                </div>
                <div className="form-item">
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password" onChange={handleChange} value={values.password} />
                </div>
                {error && (
                    <p
                        style={{
                            color: "red",
                            margin: "10px 0",
                        }}
                    >
                        {error}
                    </p>
                )}
                <button type="submit">{loading ? "Register..." : "Register"}</button>
            </form>
        </div>
    );
};

export default Register;
