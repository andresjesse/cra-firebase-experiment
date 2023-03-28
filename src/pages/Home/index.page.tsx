import { RouterPaths } from "@/pages/Router";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <div>Your awesome landing page!</div>
      <Link to={RouterPaths.LOGIN}>Login</Link>
    </div>
  );
}
