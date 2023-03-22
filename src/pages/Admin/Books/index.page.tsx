import { Link } from "react-router-dom";
import { RouterPaths } from "../../Router";

export default function AdminBooksPage() {
  return (
    <div>
      <h1>AdminBooksPage</h1>

      <Link to={RouterPaths.ADMIN.BOOKS.CREATE}>Create</Link>
    </div>
  );
}
