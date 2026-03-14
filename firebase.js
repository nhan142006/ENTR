import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBq09nUEFgNW6EhM5sWGutCT5OjSzp5Ek0",
  authDomain: "qr-menu-order-44de4.firebaseapp.com",
  projectId: "qr-menu-order-44de4",
  storageBucket: "qr-menu-order-44de4.firebasestorage.app",
  messagingSenderId: "598536526114",
  appId: "1:598536526114:web:c8289232fb2d77894aad7b",
  measurementId: "G-54V0XHQHJ1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
