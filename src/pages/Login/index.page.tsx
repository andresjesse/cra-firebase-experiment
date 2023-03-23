import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { RouterPaths } from "../Router";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login("user@email.com", "123456");
      navigate(RouterPaths.ADMIN.INDEX);
    } catch (e) {
      console.log("Deal error!", e);
    }
  };

  return (
    <div>
      <h1>LoginPage</h1>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
