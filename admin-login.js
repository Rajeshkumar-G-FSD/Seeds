document.getElementById('login-button').addEventListener('click', loginAdmin);

function loginAdmin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace with your actual admin credentials
    const adminUsername = "admin";
    const adminPassword = "admin";

    if (username === adminUsername && password === adminPassword) {
        alert("Login successful!");
        // Redirect to admin dashboard
        window.location.href = "admin.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
