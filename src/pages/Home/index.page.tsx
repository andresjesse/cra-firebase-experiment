import { Link } from "react-router-dom";
import { Routes } from "../Router";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={Routes.LOGIN}>Login</Link>
    </div>
  );
}
