const newLogHandler = async (event) => {
    event.preventDefault();
    
    const description = document.querySelector('#describe-input').value.trim();
    const water_amt = document.querySelector('#water-input').value.trim();
    const temperature = document.querySelector('#temp-input').value.trim();
    const humidity = document.querySelector('#humid-input').value.trim();
    const height = document.querySelector('#height-input').value.trim();
    const leaf_growth = document.querySelector('#leaf-input').value.trim();
    const weather = document.querySelector('#weather-input').value.trim();

    //note: not all of the fields are required, check which ones are
    if (description && water_amt && temperature && humidity && height && leaf_growth && weather) {
        const response = await fetch(`/api/progress`, {
            method: 'POST',
            body: JSON.stringify({ description, water_amt, temperature, humidity, height, leaf_growth, weather}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/progress');
        } else {
            alert('Failed to add log');
        }
    }
};

document
    .querySelector('.new-log-form')
    .addEventListener('submit', newLogHandler);