function signUp(event) {
    event.preventDefault();
  
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
  
    // Basic validation (you can add more sophisticated validation)
    if (username && password) {
      // Simulating a successful sign-up (in a real application, you would send a request to the server)
      alert('Sign-up successful!');
      window.location.href = 'login.html'; // Redirect to the login page after sign-up
    } else {
      alert('Please enter both username and password.');
    }
  }
  