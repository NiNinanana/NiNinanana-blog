import { collection, getFirestore } from "firebase/firestore";

import { firebaseApp } from "utils/firebase";

const firebaseFirestore = getFirestore(firebaseApp);

const blogsFirestore = collection(firebaseFirestore, "blogs");
const categoriesFirestore = collection(firebaseFirestore, "categories");

export { firebaseFirestore, blogsFirestore, categoriesFirestore };
