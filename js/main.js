// LOAD HEADER FOOTER
fetch('header.html')
.then(res => res.text())
.then(data => document.getElementById('header').innerHTML = data);

fetch('footer.html')
.then(res => res.text())
.then(data => document.getElementById('footer').innerHTML = data);


// REGISTER
function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Registered Successfully");
    window.location.href = "login.html";
}

// LOGIN
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    if(user === savedUser && pass === savedPass){
        alert("Login Successful");
    } else {
        alert("Invalid Credentials");
    }
}
