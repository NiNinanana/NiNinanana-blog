import { collection, getFirestore } from "firebase/firestore";

import { firebaseApp } from "utils/firebase";

const firebaseFirestore = getFirestore(firebaseApp);

const blogsFirestore = collection(firebaseFirestore, "blogs");

export { firebaseFirestore, blogsFirestore };
