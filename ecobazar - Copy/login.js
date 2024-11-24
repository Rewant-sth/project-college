document.addEventListener("DOMContentLoaded", function () {
    // Toggle between login and signup forms
    const showSignup = document.getElementById("show-signup");
    const showLogin = document.getElementById("show-login");
    
    const loginFormContainer = document.getElementById("login-form-container");
    const signupFormContainer = document.getElementById("signup-form-container");
  
    // Show signup form
    showSignup.addEventListener("click", function () {
      loginFormContainer.style.display = "none";
      signupFormContainer.style.display = "block";
    });
  
    // Show login form
    showLogin.addEventListener("click", function () {
      signupFormContainer.style.display = "none";
      loginFormContainer.style.display = "block";
    });
  
    // Login form validation and submission
    const loginForm = document.querySelector("#login-form");
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.querySelector("#login-email").value;
      const password = document.querySelector("#login-password").value;
  
      if (email && password) {
        alert("Login successful!");
      } else {
        alert("Please fill in all fields!");
      }
    });
  
    // Signup form validation and submission
    const signupForm = document.querySelector("#signup-form");
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.querySelector("#signup-name").value;
      const email = document.querySelector("#signup-email").value;
      const password = document.querySelector("#signup-password").value;
      const confirmPassword = document.querySelector("#signup-confirm-password").value;
  
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
      } else {
        alert("Signup successful!");
      }
    });
  });
  