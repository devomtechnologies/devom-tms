import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZNtuiJET6l0IfBaybKtsDkqvzW4qaDxg",
  authDomain: "devom-tms.firebaseapp.com",
  projectId: "devom-tms",
  storageBucket: "devom-tms.firebasestorage.app",
  messagingSenderId: "772473003335",
  appId: "1:772473003335:web:c880a5dfb6aae18aaf4062",
  measurementId: "G-WLL7YY5GCR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
