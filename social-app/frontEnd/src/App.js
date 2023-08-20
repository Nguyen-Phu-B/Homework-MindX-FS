import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/layout/Header";
import AuthState from "./contexts/AuthContext/AuthState";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
    return (
        <Router>
            <AuthState>
                <Header />
                <Routes>
                    <Route path="/" element={<PrivateRoute component={Home} />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                </Routes>
            </AuthState>
        </Router>
    );
};

export default App;
