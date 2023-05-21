
function fetchUserData() {
 
    const userData = {
      profilePicture: 'https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-1/297802466_125862313502620_5323529870175982280_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=c6021c&_nc_ohc=Fhf9J7fbrmYAX_OyAM7&_nc_ht=scontent-bom1-1.xx&oh=00_AfBCy4nUsGymjgJMPIb_3SXoN1n59-LtUCLwZr1S04eOHA&oe=646E157F',
      fullName: 'John Doe',
      email: 'john.doe@example.com'
    };
  
    return userData;
  }
  
  // Function to populate the profile section
  function populateProfileSection(userData) {
    const profilePicture = document.getElementById('profilePicture');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
  
    profilePicture.src = userData.profilePicture;
    fullName.textContent = userData.fullName;
    email.textContent = userData.email;
  }
  
  // Fetch user data and populate the profile section on page load
  document.addEventListener('DOMContentLoaded', function() {
    const userData = fetchUserData();
    populateProfileSection(userData);
  });
  
