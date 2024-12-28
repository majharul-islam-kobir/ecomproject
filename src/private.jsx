import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Private({ children }) {
    const { isAuthenticated } = useSelector((store) => store.auth);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
