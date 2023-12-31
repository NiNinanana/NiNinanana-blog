import { getDocs, Query, query } from "firebase/firestore";

import { Article } from "types/article";
import { blogsFirestore } from "utils/firebase/store";

export const getBlogs = async () => {
  const snapshot = await getDocs(query(blogsFirestore) as Query<Article, Article>);
  return snapshot;
};
