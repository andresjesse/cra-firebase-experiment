import useDocument from "@/hooks/useDocument";
import { RouterPaths } from "@/pages/Router";
import Book from "@/types/Book";
import { Link, useParams } from "react-router-dom";

export default function AdminBooksShowPage() {
  const { id } = useParams();

  const { data, loading, upsert, refresh } = useDocument<Book>("books", id!);

  if (loading) return <div>Loading...</div>;

  const randomUpdate = () => {
    if (data) {
      upsert({
        ...data,
        title: "Random title: " + Math.random(),
      });
    }
  };

  return (
    <div>
      <h1>Book Details</h1>
      <div>id: {data?.id}</div>
      <div>title: {data?.title}</div>
      <div>pages: {data?.pages}</div>
      <div>
        <Link to={RouterPaths.ADMIN.BOOKS.SHOW.CHAPTERS.INDEX}>Chapters</Link>
      </div>

      <button onClick={randomUpdate}>Random update (realtime updates)</button>

      <div>Set realtime updates to false to see Refresh in action</div>
      <button onClick={refresh}>Refresh</button>
    </div>
  );
}
