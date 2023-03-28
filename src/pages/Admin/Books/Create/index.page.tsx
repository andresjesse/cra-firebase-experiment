import useCollection from "@/hooks/useCollection";
import Book from "@/types/Book";
import { useNavigate } from "react-router-dom";

export default function AdminBooksCreatePage() {
  const navigate = useNavigate();

  const { create } = useCollection<Book>("books");

  const handleCreate = async () => {
    await create({
      title: "Titlw 1",
      pages: 123,
    });

    navigate(-1);
  };

  return (
    <div>
      <h1>CreateBookPage</h1>

      <button onClick={handleCreate}>Create a random Book</button>
    </div>
  );
}
