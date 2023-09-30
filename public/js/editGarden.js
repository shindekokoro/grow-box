const newPlantHandler = async (event) => {
    event.preventDefault();

    const plantName = document.querySelector('#plant-input').value.trim();

    if (plantName) {
        const response = await fetch(`/api/garden`, {
            method: 'POST',
            body: JSON.stringify(plantName),
            headers: {
                'Content-Type': 'appilcation/json',
            },
        });

        if (response.ok) {
            document.location.replace('/garden');
        } else {
            alert('Failed to add plant');
        }
    }
};

//currently this^ is not creating an entry in the table. possibly to do with user_id?

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('plant-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/garden/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to destroy plant');
        }
    }
};

document
    .querySelector('.new-plant-form')
    .addEventListener('submit', newPlantHandler);

document
    .querySelector('.plant-list')
    .addEventListener('click', delButtonHandler);
//add delete button to plant list