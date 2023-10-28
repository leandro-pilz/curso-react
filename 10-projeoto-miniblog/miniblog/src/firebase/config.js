import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxrTB8nxDJZu-RO8sSyeZddVvRwxaldvo",
  authDomain: "miniblog-77e7c.firebaseapp.com",
  projectId: "miniblog-77e7c",
  storageBucket: "miniblog-77e7c.appspot.com",
  messagingSenderId: "310044278583",
  appId: "1:310044278583:web:406a828273d4c920c6e4b2",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
