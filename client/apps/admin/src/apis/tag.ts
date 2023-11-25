import { addDoc, collection, deleteDoc, doc, getDocs, Query, query } from "firebase/firestore";

import { Tag } from "types/tags";
import { firebaseCollections } from "utils/firebase/collections";
import { firebaseFirestore, tagsFirestore } from "utils/firebase/store";

export const getTags = async () => {
  const snapshot = await getDocs(query(tagsFirestore) as Query<Tag, Tag>);
  return snapshot;
};

export const postTag = async (tag: Tag) => {
  const docRef = await addDoc(collection(firebaseFirestore, firebaseCollections.tag), tag);
  return docRef;
};

export const deleteTag = async (id: string) => {
  const docRef = await deleteDoc(doc(firebaseFirestore, firebaseCollections.tag, id));
  return docRef;
};
