//see line 9 and 30 for possible issue with path

const editUserHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#edit-user').value.trim();

    if (username) {
        const response = await fetch('/api/users/:id', {
            method: 'PUT',
            body: JSON.stringify({ username }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/user');
            alert('Username changed!');
        } else {
            alert('Failed to change username.');
        }
    }
};

const editPasswordHandler = async (event) => {
    event.preventDefault();

    const password = document.querySelector('#edit-pass').value.trim();

    if (password) {
        const response = await fetch('/api/users/:id', {
            method: 'PUT',
            body: JSON.stringify({ password }),
            headers: {'Content-Type' : 'applications/json'}
        });

        if (response.ok) {
            document.location.replace('/user');
            alert('Password changed!');
        } else {
            alert('Failed to change password.')
        }
    }
};

document
    .querySelector('.edit-user-form')
    .addEventListener('submit', editUserHandler);

document
    .querySelector('.edit-pass-form')
    .addEventListener('submit', editPasswordHandler);

//add user page route in controllers