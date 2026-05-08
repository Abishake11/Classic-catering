import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import Loader from "../components/Loader";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, isHydrated } = useAuthStore();

  // ⏳ Wait until hydration completes
  if (!isHydrated) {
    return <Loader />;
  }

  // 🚫 Only redirect AFTER hydration
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;