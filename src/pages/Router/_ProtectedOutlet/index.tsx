import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import firebaseApp from "../../../config/firebaseConfig";

const auth = getAuth(firebaseApp);

export default function ProtectedOutlet() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
