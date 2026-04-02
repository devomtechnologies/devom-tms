<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCryX2UDfSn9vmYpT8jmgh-1abwEEF6KgY",
  authDomain: "devom-tms-110f0.firebaseapp.com",
  projectId: "devom-tms-110f0",
  storageBucket: "devom-tms-110f0.firebasestorage.app",
  messagingSenderId: "279439583320",
  appId: "1:279439583320:web:dcccd1979b0c53f9cd822d",
  measurementId: "G-8CHQLPL2E3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTER
window.registerUser = function(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    alert("Registration Successful");
    window.location.href = "dashboard.html";
  })
  .catch(err => alert(err.message));
}
