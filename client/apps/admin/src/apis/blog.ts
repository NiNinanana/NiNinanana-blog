import { addDoc, collection, getDocs, Query, query } from "firebase/firestore";

import { Blog } from "types/blogs";
import { firebaseCollections } from "utils/firebase/collections";
import { blogsFirestore, firebaseFirestore } from "utils/firebase/store";

export const getBlogs = async () => {
  const snapshot = await getDocs(query(blogsFirestore) as Query<Blog, Blog>);
  return snapshot;
};

export const postBlog = async (blog: Blog) => {
  const docRef = await addDoc(collection(firebaseFirestore, firebaseCollections.blog), blog);
  return docRef;
};
