import { collection, getFirestore } from "firebase/firestore";

import { firebaseApp } from "utils/firebase";
import { firebaseCollections } from "./collections";

const firebaseFirestore = getFirestore(firebaseApp);

const blogsFirestore = collection(firebaseFirestore, firebaseCollections.blog);
const categoriesFirestore = collection(firebaseFirestore, firebaseCollections.category);
const tagsFirestore = collection(firebaseFirestore, firebaseCollections.tag);

export { firebaseFirestore, blogsFirestore, categoriesFirestore, tagsFirestore };
