import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "../../config/firebaseConfig";

const auth = getAuth(firebaseApp);

export default function AdminPage() {
  return (
    <div>
      <h1>AdminPage</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}
