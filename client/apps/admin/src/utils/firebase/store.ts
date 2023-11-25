import { collection, getFirestore } from "firebase/firestore";

import { firebaseApp } from "utils/firebase";

const firebaseFirestore = getFirestore(firebaseApp);

const blogsFirestore = collection(firebaseFirestore, "blogs");
const categoriesFirestore = collection(firebaseFirestore, "categories");
const tagsFirestore = collection(firebaseFirestore, "tags");

export { firebaseFirestore, blogsFirestore, categoriesFirestore, tagsFirestore };
