import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlECaEkFpBbNhyNr3Plxcgnt0L6eX8hRo",
  authDomain: "nininanana-blog.firebaseapp.com",
  projectId: "nininanana-blog",
  storageBucket: "nininanana-blog.appspot.com",
  messagingSenderId: "622266968051",
  appId: "1:622266968051:web:184dd1ecc8c8857ad1d486",
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
