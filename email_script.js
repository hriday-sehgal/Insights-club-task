// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get the entered OTP
    const otp = document.getElementById('otp').value;
  
  
    // Redirect to the home page after successful verification
    window.location.href = 'home_page_web.html';
  }
  
  // Attach event listener
  document.getElementById('verificationForm').addEventListener('submit', handleFormSubmit);
  
