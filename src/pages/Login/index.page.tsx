import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import firebaseApp from "../../config/firebaseConfig";
import { Routes } from "../Router";

const auth = getAuth(firebaseApp);

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Login");
    await signInWithEmailAndPassword(auth, "user@email.com", "123456");
    navigate(Routes.ADMIN);
  };

  return (
    <div>
      <h1>LoginPage</h1>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
