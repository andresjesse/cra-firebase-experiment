import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import firebaseApp from "../../config/firebaseConfig";
import { RouterPaths } from "../Router";

const auth = getAuth(firebaseApp);

export default function AdminPage() {
  return (
    <div>
      <h1>AdminPage</h1>
      <div>
        <Link to={RouterPaths.ADMIN.BOOKS.INDEX}>Books</Link>
      </div>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}
