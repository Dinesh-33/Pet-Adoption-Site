// login.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form'); // get the form element
  
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData(loginForm); // create FormData from the form element
      const username = formData.get('username');
      const password = formData.get('password');
  
      // Simulate authentication (replace with actual logic)
      if (username === 'user' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to pet listing page
      } else {
        alert('Invalid username or password. Please try again.');
      }
    });
  });