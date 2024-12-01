// sign in
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform login logic (e.g., send data to server, validate credentials)
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirect to the appropriate page or display error messages
    // ...
});

