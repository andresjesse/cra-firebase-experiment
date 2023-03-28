import React from "react";
import { useParams } from "react-router-dom";
import useDocument from "../../../../hooks/useDocument";
import Book from "../../../../types/Book";

export default function AdminBooksShowPage() {
  const { id } = useParams();

  const { data, loading, update, refresh } = useDocument<Book>("books", id!);

  if (loading) return <div>Loading...</div>;

  const randomUpdate = () => {
    if (data) {
      update({
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

      <button onClick={randomUpdate}>Random update (realtime updates)</button>

      <div>Set realtime updates to false to see Refresh in action</div>
      <button onClick={refresh}>Refresh</button>
    </div>
  );
}
