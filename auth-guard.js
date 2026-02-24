// auth-guard.js — ensures pages are protected by Firebase Authentication
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBX39_jW-JiCwjT6xDFK9N5xaEphxEzHdk",
  authDomain: "canineguard-8abb8.firebaseapp.com",
  projectId: "canineguard-8abb8",
  storageBucket: "canineguard-8abb8.firebasestorage.app",
  messagingSenderId: "69261315771",
  appId: "1:69261315771:web:b375c80c933dde3eb2239e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/**
 * protectPage - redirects to `redirectUrl` when there is no authenticated user
 * @param {string} redirectUrl - page to redirect unauthenticated users to
 */
export function protectPage(redirectUrl = "ngo-login.html") {
  if (typeof window === "undefined") return; // safe for non-browser environments
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.replace(redirectUrl);
    }
  });
}

// Backwards-compatible auto-run: importing this module in a page will protect it automatically
if (typeof window !== "undefined") {
  protectPage();
}

