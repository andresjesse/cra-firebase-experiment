import { Link } from "react-router-dom";
import useCollection, { Book } from "../../../hooks/useCollection";
import { RouterPaths } from "../../Router";

export default function AdminBooksPage() {
  const { data, loading, remove } = useCollection<Book>("books");

  if (loading) return <div>Loading</div>;

  return (
    <div>
      <h1>AdminBooksPage</h1>

      {data.map((book) => (
        <div key={book.id}>
          {JSON.stringify(book)}
          <button onClick={() => remove(book.id!)}>Remove</button>
        </div>
      ))}

      <Link to={RouterPaths.ADMIN.BOOKS.CREATE}>Create</Link>
    </div>
  );
}
