const apiKey = '04215c35d8ea8713f3eb911a13191fc4';

document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeather(city);
    } else {
        displayError("Please enter a city name.");
    }
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(() => {
            displayError("City not found. Please enter a valid city name.");
        });
}

function displayWeather(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = data.main.temp;
    document.getElementById('weather').textContent = data.weather[0].main;
    document.getElementById('windSpeed').textContent = data.wind.speed;
    document.getElementById('description').textContent = data.weather[0].description;

    document.getElementById('weatherInfo').style.display = 'block';
    document.getElementById('error').style.display = 'none';
}

function displayError(message) {
    document.getElementById('weatherInfo').style.display = 'none';
    document.getElementById('error').textContent = message;
    document.getElementById('error').style.display = 'block';
}
