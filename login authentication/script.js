const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
];

const registrationForm = document.getElementById("register-form");
const loginForm = document.getElementById("login");
const securedPage = document.getElementById("secured-page");
const logoutButton = document.getElementById("logout");

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    if (users.some(user => user.username === username)) {
        alert("Username already exists. Please choose another.");
    } else {
        users.push({ username, password });
        alert("Registration successful! You can now log in.");
        registrationForm.reset();
    }
});

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        loginForm.reset();
        loginForm.style.display = "none";
        securedPage.style.display = "block";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

logoutButton.addEventListener("click", function () {
    loginForm.style.display = "block";
    securedPage.style.display = "none";
});
