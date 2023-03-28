import useCollection from "@/hooks/useCollection";
import Chapter from "@/types/Chapter";
import { Link, useParams } from "react-router-dom";

export default function AdminBooksChaptersPage() {
  const { id } = useParams();

  const { data, loading, create, refreshData } = useCollection<Chapter>(
    `books/${id}/chapters`
  );

  if (loading) return <div>Loading...</div>;

  const createRandomChapter = async () => {
    await create({
      title: "Random title: " + Math.random(),
    });

    refreshData();
  };

  return (
    <div>
      <h1>AdminBooksChaptersPage</h1>

      <div>Nested collection example:</div>

      <div>
        {data.map((chapter) => (
          <div key={chapter.id!}>
            <span>{JSON.stringify(chapter)}</span>
            <Link to={chapter.id!}>Show Chapter Details</Link>
          </div>
        ))}
      </div>

      <button onClick={createRandomChapter}>Create random chapter</button>
    </div>
  );
}
