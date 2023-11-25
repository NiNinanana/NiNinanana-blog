import { getDocs, Query, query } from "firebase/firestore";

import { Category } from "types/categories";
import { categoriesFirestore } from "utils/firebase/store";

export const getCategories = async () => {
  const snapshot = await getDocs(query(categoriesFirestore) as Query<Category, Category>);
  return snapshot;
};
