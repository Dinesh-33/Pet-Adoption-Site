document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(signupForm);
        const username = formData.get('username');
        const password = formData.get('password');
        const email = formData.get('email');

        // Simulate registration (replace with actual logic)
        alert(`Account created for ${username} with email ${email}. Please login.`);
        window.location.href = 'login.html'; // Redirect to login page after signup
    });
});
