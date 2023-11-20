import { getDocs, Query, query } from "firebase/firestore";

import { Blogs } from "types/blogs";
import { blogsFirestore } from "utils/firebase/store";

export const getBlogs = async () => {
  const snapshot = await getDocs(query(blogsFirestore) as Query<Blogs, Blogs>);
  return snapshot;
};
