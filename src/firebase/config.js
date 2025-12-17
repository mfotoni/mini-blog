import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwVYDLJT-HlqKb71unZj_RJclZkpRl4eY",

  authDomain: "miniblog-48cb7.firebaseapp.com",

  projectId: "miniblog-48cb7",

  storageBucket: "miniblog-48cb7.firebasestorage.app",

  messagingSenderId: "457316191068",

  appId: "1:457316191068:web:6ff5db535f8ab1f36d4f99",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
