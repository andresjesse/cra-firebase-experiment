import useDocument from "@/hooks/useDocument";
import Chapter from "@/types/Chapter";
import { useParams } from "react-router-dom";

export default function AdminBooksChaptersShowPage() {
  const { id, chid } = useParams();

  const { data, loading } = useDocument<Chapter>(`books/${id}/chapters`, chid!);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Chapter Show</h1>

      <span>{JSON.stringify(data)}</span>
    </div>
  );
}
