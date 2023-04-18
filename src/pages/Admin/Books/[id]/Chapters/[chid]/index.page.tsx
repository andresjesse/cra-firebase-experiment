import useDocument from "@/hooks/useDocument";
import Chapter from "@/types/Chapter";
import { useParams } from "react-router-dom";

export default function AdminBooksChaptersShowPage() {
  const { id, chid } = useParams();

  const { data, loading, upsert, refresh } = useDocument<Chapter>(
    `books/${id}/chapters`,
    chid!
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Chapter Show</h1>

      <span>{JSON.stringify(data)}</span>

      <button
        onClick={async () => {
          await upsert({
            ...data,
            title: "Random title upsert " + Math.random(),
          });
        }}
      >
        upsert
      </button>

      <button
        onClick={async () => {
          await refresh();
        }}
      >
        refresh
      </button>
    </div>
  );
}
