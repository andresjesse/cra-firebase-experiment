import { Link } from "react-router-dom";
import { RouterPaths } from "../Router";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={RouterPaths.LOGIN}>Login</Link>
    </div>
  );
}
