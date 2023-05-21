// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get the entered OTP
    const otp = document.getElementById('otp').value;
  
    // TODO: Implement OTP verification logic
  
    // Redirect to the home page after successful verification
    window.location.href = 'home.html';
  }
  
  // Attach event listener
  document.getElementById('verificationForm').addEventListener('submit', handleFormSubmit);
  