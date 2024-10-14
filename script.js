document.addEventListener('DOMContentLoaded', () => {
  const profilePicture = document.getElementById('profile-picture');
  const profileName = document.getElementById('profile-name');
  const generateProfileButton = document.getElementById('generate-profile');

  function fetchProfile() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        profilePicture.src = user.picture.large;
        profilePicture.style.display = 'block';
        profileName.textContent = `Profil: ${user.name.first} ${user.name.last}`;
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  fetchProfile();

  generateProfileButton.addEventListener('click', fetchProfile);
});
