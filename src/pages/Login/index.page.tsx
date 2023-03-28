import useAuth from "@/hooks/useAuth";
import { RouterPaths } from "@/pages/Router";
import { useNavigate } from "react-router-dom";

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

      <div>
        This example has a fixed user <b>"user@email.com"</b> with password{" "}
        <b>"123456"</b>. Make sure to create it in your firebase application.
      </div>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
