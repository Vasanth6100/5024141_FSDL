// Array to store users
let users = [];

// Show Login Form
function showLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("formTitle").innerText = "Login";
    document.getElementById("message").innerText = "";
}

// Show Register Form
function showRegister() {
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("formTitle").innerText = "Register";
    document.getElementById("message").innerText = "";
}

// Register Function
function register() {
    try {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value;
        let dob = document.getElementById("dob").value;
        let message = document.getElementById("message");

        // Basic Validation
        if (name === "" || email === "" || password === "" || dob === "") {
            throw "All fields are required!";
        }

        // String validation (name should contain only letters)
        let namePattern = /^[A-Za-z ]+$/;
        if (!namePattern.test(name)) {
            throw "Name should contain only letters!";
        }

        // Password length validation
        if (password.length < 6) {
            throw "Password must be at least 6 characters!";
        }

        // Date validation (age check 18+)
        let birthDate = new Date(dob);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();

        if (age < 18) {
            throw "You must be at least 18 years old!";
        }

        // Check if email already exists
        for (let user of users) {
            if (user.email === email) {
                throw "Email already registered!";
            }
        }

        // Store user in array
        users.push({
            name: name,
            email: email,
            password: password,
            dob: dob
        });

        message.style.color = "green";
        message.innerText = "Registration Successful!";
        showLogin();

    } catch (error) {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText = error;
    }
}

// Login Function
function login() {
    try {
        let email = document.getElementById("loginEmail").value.trim();
        let password = document.getElementById("loginPassword").value;
        let message = document.getElementById("message");

        if (email === "" || password === "") {
            throw "Please enter email and password!";
        }

        let found = false;

        for (let user of users) {
            if (user.email === email && user.password === password) {
                found = true;
                message.style.color = "green";
                message.innerText = "Login Successful! Welcome " + user.name;
                break;
            }
        }

        if (!found) {
            throw "Invalid Email or Password!";
        }

    } catch (error) {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText = error;
    }
}
