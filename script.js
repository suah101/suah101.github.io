document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const welcomeContainer = document.getElementById('welcome-container');
    const welcomeMessage = document.getElementById('welcome-message');
    const logoutBtn = document.getElementById('logout-btn');

    // Check if user is logged in from session storage
    if (sessionStorage.getItem('username')) {
        showWelcomeMessage(sessionStorage.getItem('username'));
    }

    // Login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate user authentication (replace with actual backend logic)
        if (username && password) {
            // Assume authentication is successful
            sessionStorage.setItem('username', username);
            showWelcomeMessage(username);
        } else {
            loginError.textContent = 'Invalid username or password.';
        }
    });

    // Logout button click
    logoutBtn.addEventListener('click', function() {
        sessionStorage.removeItem('username');
        hideWelcomeMessage();
    });

    // Function to show welcome message
    function showWelcomeMessage(username) {
        loginForm.style.display = 'none';
        welcomeContainer.style.display = 'block';
        welcomeMessage.textContent = `Welcome, ${username}!`;
        loginError.textContent = '';
    }

    // Function to hide welcome message and show login form
    function hideWelcomeMessage() {
        loginForm.style.display = 'block';
        welcomeContainer.style.display = 'none';
        welcomeMessage.textContent = '';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});
