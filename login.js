function login(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Basic validation (you can add more sophisticated validation)
    if (username && password) {
      // Simulating a successful login (in a real application, you would send a request to the server)
      alert('Login successful!');
      window.location.href = 'index.html'; // Redirect to the main page after login
    } else {
      alert('Please enter both username and password.');
    }
  }
  