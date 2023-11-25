import { addDoc, collection, deleteDoc, getDocs, Query, query, doc } from "firebase/firestore";

import { Category } from "types/categories";
import { categoriesFirestore, firebaseFirestore } from "utils/firebase/store";

export const getCategories = async () => {
  const snapshot = await getDocs(query(categoriesFirestore) as Query<Category, Category>);
  return snapshot;
};

export const postCategory = async (category: Category) => {
  const docRef = await addDoc(collection(firebaseFirestore, "categories"), category);
  return docRef;
};

export const deleteCategory = async (id: string) => {
  const docRef = await deleteDoc(doc(firebaseFirestore, "categories", id));
  return docRef;
};
