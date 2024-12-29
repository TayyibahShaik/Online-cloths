function sendContactMessage(event) {
    event.preventDefault();
    
    // Display a thank you message
    alert('Thank you for contacting us! Your message has been sent.');
    
    // Clear the form fields
    document.getElementById('contact-form').reset();
  }
  