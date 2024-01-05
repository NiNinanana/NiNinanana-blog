import { doc, getDoc, getDocs, Query, query } from "firebase/firestore";

import { Article } from "types/article";
import { blogsFirestore, firebaseFirestore } from "utils/firebase/store";

export const getBlogs = async () => {
  const snapshot = await getDocs(query(blogsFirestore) as Query<Article, Article>);
  return snapshot;
};

export const getBlog = async (id: string) => {
  const docRef = doc(firebaseFirestore, "blogs", id);
  const docSnap = await getDoc(docRef);
  return docSnap;
};
