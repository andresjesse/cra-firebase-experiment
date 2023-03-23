import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { RouterPaths } from "../Router";

export default function AdminPage() {
  const { logout } = useAuth();

  return (
    <div>
      <h1>AdminPage</h1>
      <div>
        <Link to={RouterPaths.ADMIN.BOOKS.INDEX}>Books</Link>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
