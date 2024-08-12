document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const loginButton = document.querySelector('.btn.int');
    const passwordToggle = document.createElement('span');

    passwordToggle.textContent = 'Show';
    passwordToggle.classList.add('password-toggle'); // Add CSS class

    // Add the toggle after the password input
    passwordInput.parentNode.insertBefore(passwordToggle, passwordInput.nextSibling);

    // Toggle password visibility
    passwordToggle.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.textContent = 'Hide';
        } else {
            passwordInput.type = 'password';
            passwordToggle.textContent = 'Show';
        }
    });

    // Form validation and login simulation
    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert("Please fill in both fields.");
            return;
        }

        // Simulate login (you would replace this with actual logic)
        if (email === "jan87@gmail.com" && password === "12345") {
            alert("Login successful!");
        } else {
            alert("Invalid email or password.");
        }
    });
});
