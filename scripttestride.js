document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('testRideForm');
  const confirmationMessage = document.getElementById('confirmationMessage');
  const userNameSpan = document.getElementById('userName');
  const userEmailSpan = document.getElementById('userEmail');

  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the form from submitting to a server

      // Get user inputs
      const userName = document.getElementById('name').value;
      const userEmail = document.getElementById('email').value;

      // Update confirmation message
      userNameSpan.textContent = userName;
      userEmailSpan.textContent = userEmail;

      // Show confirmation message
      confirmationMessage.classList.remove('hidden');

      // Optionally clear the form
      form.reset();
  });
});
