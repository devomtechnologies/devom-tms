import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } 
from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

// REGISTER
window.registerUser = function(e){
e.preventDefault();

const email = document.getElementById("r_email").value;
const pass = document.getElementById("r_password").value;

createUserWithEmailAndPassword(auth, email, pass)
.then(()=>{
alert("Registered Successfully");
location.reload();
})
.catch(err=>alert(err.message));
}

// LOGIN
window.loginUser = function(e){
e.preventDefault();

const email = document.getElementById("email").value;
const pass = document.getElementById("password").value;

signInWithEmailAndPassword(auth, email, pass)
.then(()=>{
window.location="dashboard.html";
})
.catch(err=>alert(err.message));
}

// LOGOUT
window.logoutUser = function(){
signOut(auth).then(()=>{
window.location="index.html";
});
}
