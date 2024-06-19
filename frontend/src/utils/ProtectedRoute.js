import { Outlet, Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
    const {user} = useAuth();
    console.log("user", user);
    return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute;
