// firebase-init.js
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBX39_jW-JiCwjT6xDFK9N5xaEphxEzHdk",
  authDomain: "canineguard-8abb8.firebaseapp.com",
  projectId: "canineguard-8abb8",
  storageBucket: "canineguard-8abb8.firebasestorage.app",
  messagingSenderId: "69261315771",
  appId: "1:69261315771:web:b375c80c933dde3eb2239e"
};

export const app =
  getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
