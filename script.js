// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get the email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // TODO: Store the email and password in the database (MongoDB, MySQL, Firebase, etc.)
  
    // Redirect to the home page
    window.location.href = 'home_page_web.html';
  }
  
  // Function to toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Attach event listeners
  document.getElementById('loginForm').addEventListener('submit', handleFormSubmit);
  document.getElementById('googleSignIn').addEventListener('click', handleGoogleSignIn);
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
  
