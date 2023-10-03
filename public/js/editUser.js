const editUserHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#edit-user').value.trim();
  const password = document.querySelector('#edit-pass').value.trim();
  const userID = document.querySelector('#submit-btn').value;
  if (username || password) {
    const response = await fetch('/api/users/' + userID, {
      method: 'PUT',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/user');
      alert('User updated!');
    } else {
      alert('Failed to update user.');
    }
  }
};

document
  .querySelector('.edit-user-form')
  .addEventListener('submit', editUserHandler);
