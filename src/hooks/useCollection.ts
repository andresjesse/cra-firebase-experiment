import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export type Book = {
  id?: string;
  title: string;
  pages: number;
};

export default function useCollection<T extends { [x: string]: any }>(
  collectionName: string,
  precache = true,
  realtime = false
) {
  const db = getFirestore();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<T>>([]);

  // Create a new document in the collection and return the created id
  const create = async (newVal: T) => {
    const docRef = await addDoc(collection(db, collectionName), newVal);
    return docRef.id;
  };

  const remove = async (id: string) => {
    await deleteDoc(doc(db, collectionName, id));
  };

  const update = (key: string, newVal: any) => {
    //   const databaseReference = ref(getDatabase(), collection + "/" + key);
    //   set(databaseReference, newVal);
  };

  // Get all documents from the collection
  const all = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, collectionName));
    const asMap = querySnapshot.docs.map((doc) => {
      const data = doc.data() as T;
      return { id: doc.id, ...data };
    });
    setData(asMap);
    setLoading(false);
    return asMap;
  };

  // Initial call to fill 'data' with all documents when precache is active
  useEffect(() => {
    if (precache) all();

    //TODO: add conditional realtime listener
  }, []);

  return { data, loading, create, remove, update, all };
}
