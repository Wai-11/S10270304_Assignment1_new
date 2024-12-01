
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const family = document.getElementById('family').value;
    const model = document.getElementById('model').value;
    const name = document.getElementById('name').value;
    const country = document.getElementById('country').value;
    const postalCode = document.getElementById('postalCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const dateOfRiding = document.getElementById('dateOfRiding').value;
    const email = document.getElementById('email').value;

    // Basic validation (you can add more complex validation as needed)
    if (family === '' || model === '' || name === '' || country === '' || postalCode === '' || phoneNumber === '' || dateOfRiding === '' || email === '') {
      alert('Please fill in all required fields.');
      return;
    }

    // If validation passes, submit the form or perform other actions
    form.submit(); // Uncomment to submit the form

    // Alternatively, you can send the form data to a server using AJAX or other techniques
    // ...
  });
