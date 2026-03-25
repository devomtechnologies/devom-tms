// REGISTER
function registerUser(e){
    e.preventDefault();

    const user = {
        name: document.getElementById('name').value,
        transport: document.getElementById('transport').value,
        userId: document.getElementById('userId').value,
        password: document.getElementById('password').value,
        balance: 0
    };

    localStorage.setItem(user.userId, JSON.stringify(user));

    alert("Registration Done → Now Pay");
    window.location.href = "index.html";
}

// LOGIN
function loginUser(e){
    e.preventDefault();

    const userId = document.getElementById('loginId').value;
    const pass = document.getElementById('loginPass').value;

    const user = JSON.parse(localStorage.getItem(userId));

    if(user && user.password === pass){
        localStorage.setItem("currentUser", userId);
        window.location.href = "dashboard.html";
    } else {
        alert("Wrong Login");
    }
}

// LOGOUT
function logout(){
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}
