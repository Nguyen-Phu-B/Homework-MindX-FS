import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext/AuthContext";

const Header = () => {
    const navigate = useNavigate();
    const {
        handleLogOut,
        auth: { isAuthenticated },
    } = useContext(AuthContext);

    const onHandleLogOut = () => {
        localStorage.removeItem("accessToken");
        handleLogOut();
        navigate("/");
    };

    return (
        <header
            style={{
                background: "#000",
                padding: "16px 40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "white",
            }}
        >
            <h3>KBook Social</h3>
            <nav>
                <ul
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        color: "white",
                        listStyle: "none",
                    }}
                >
                    {isAuthenticated && (
                        <li>
                            <NavLink to="/" style={{ color: "white" }}>
                                Home
                            </NavLink>
                        </li>
                    )}

                    {!isAuthenticated && (
                        <li>
                            <NavLink to="/login" style={{ color: "white" }}>
                                Login
                            </NavLink>
                        </li>
                    )}
                    {!isAuthenticated && (
                        <li>
                            <NavLink to="/register" style={{ color: "white" }}>
                                Register
                            </NavLink>
                        </li>
                    )}
                    {isAuthenticated && (
                        <li>
                            <button onClick={onHandleLogOut}>Log out</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
