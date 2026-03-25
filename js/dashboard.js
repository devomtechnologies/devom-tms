document.addEventListener("DOMContentLoaded", () => {

    const userId = localStorage.getItem("currentUser");

    if(!userId){
        window.location.href = "login.html";
        return;
    }

    const user = JSON.parse(localStorage.getItem(userId));

    document.getElementById("welcome").innerHTML =
        `Welcome ${user.name} (${user.transport})`;

    // Demo Data
    document.getElementById("trips").innerText = "12";
    document.getElementById("balance").innerText = "₹ " + user.balance;
    document.getElementById("pending").innerText = "₹ 5000";
});
