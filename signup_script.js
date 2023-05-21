// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get the form input values
    const fullName = document.getElementById('fullName').value;
    const registrationNo = document.getElementById('registrationNo').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const profilePicture = document.getElementById('profilePicture').files[0];
  
    // TODO: Store the user data in the database (MongoDB, MySQL, Firebase, etc.)
    // TODO: Implement email verification functionality
  
    // Redirect to the login page after successful signup
    window.location.href = 'email_page_web.html';
  }
  
  // Attach event listener
  document.getElementById('signupForm').addEventListener('submit', handleFormSubmit);
  
