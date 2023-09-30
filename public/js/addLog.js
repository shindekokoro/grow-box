const newLogHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector('#description-input').value.trim();
  const water_amt = document.querySelector('#water-input').value.trim();
  const temperature = document.querySelector('#temperature-input').value.trim();
  const humidity = document.querySelector('#humidity-input').value.trim();
  const height = document.querySelector('#height-input').value.trim();
  const leaf_growth = document.querySelector('#leaf-input').value.trim();
  const weather = document.querySelector('#weather-input').value.trim();
  const garden_id = event.target.value;
  const response = await fetch('/api/progress/' + garden_id, {
    method: 'POST',
    body: JSON.stringify({
      description,
      water_amt,
      temperature,
      humidity,
      height,
      leaf_growth,
      weather,
      garden_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/progress/' + garden_id);
  } else {
    alert('Failed to add log');
  }
};

document
  .querySelector('#submit-progress')
  .addEventListener('click', newLogHandler);
