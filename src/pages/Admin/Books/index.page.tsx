import { Link } from "react-router-dom";
import useCollection, { Book } from "../../../hooks/useCollection";
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
        </div>
      ))}

      <Link to={RouterPaths.ADMIN.BOOKS.CREATE}>Create</Link>
    </div>
  );
}
