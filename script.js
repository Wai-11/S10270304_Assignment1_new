// Select the login form and message element
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

// Add event listener to handle form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the user's email and password
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Check if both fields are filled
    if (email && password) {
        // Display success message
        message.textContent = `Welcome, ${email}! You have logged in successfully.`;
        message.style.color = 'green';
    } else {
        // Display error message
        message.textContent = 'Please fill in both fields!';
        message.style.color = 'red';
    }
});
