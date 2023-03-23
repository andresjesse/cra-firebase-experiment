import useCollection, { Book } from "../../../../hooks/useCollection";

export default function AdminBooksCreatePage() {
  const { create } = useCollection<Book>("books");

  const handleCreate = () => {
    create({
      title: "Titlw 1",
      pages: 123,
    });
  };

  return (
    <div>
      <h1>CreateBookPage</h1>

      <button onClick={handleCreate}>Create a random Book</button>
    </div>
  );
}
