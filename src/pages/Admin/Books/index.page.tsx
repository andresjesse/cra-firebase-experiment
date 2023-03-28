import { Link } from "react-router-dom";
import useCollection from "../../../hooks/useCollection";
import Book from "../../../types/Book";
import { RouterPaths } from "../../Router";

export default function AdminBooksPage() {
  const { data, loading, remove, update, refreshData } = useCollection<Book>(
    "books",
    true
  );

  if (loading) return <div>Loading</div>;

  return (
    <div>
      <h1>AdminBooksPage</h1>

      {data.map((book) => (
        <div key={book.id}>
          {JSON.stringify(book)}
          <button
            onClick={async () => {
              await remove(book.id!);
              await refreshData();
            }}
          >
            Remove
          </button>

          <button
            onClick={async () => {
              await update(book.id!, {
                ...book,
                title: "Updated title:" + Math.random(),
              });
              await refreshData();
            }}
          >
            Update
          </button>

          <Link to={book.id!}>Show</Link>
        </div>
      ))}

      <Link to={RouterPaths.ADMIN.BOOKS.CREATE}>Create</Link>
    </div>
  );
}
