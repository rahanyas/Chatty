import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { isLogedIn, logedInThroughOauth } = useSelector((state) => state.user);

  // User is logged in either normally or through Google OAuth
  const isAuthenticated = isLogedIn || logedInThroughOauth;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
