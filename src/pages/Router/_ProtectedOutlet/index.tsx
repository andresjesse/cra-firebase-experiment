import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedOutlet() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
