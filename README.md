# Weather Web Application

## Overview
This project is part of my Byte Uprise Web Development Internship. The Weather Web App is built using **HTML**, **CSS**, and **JavaScript**, with API integration from **OpenWeatherMap**. The app allows users to enter a city name and retrieve current weather conditions such as temperature, wind speed, and weather description.

## Features
- **City Input Field**: Allows users to type the name of a city for which they want to check the weather.
- **API Integration**: Fetches weather data from the OpenWeatherMap API.
- **Weather Details**: Displays current weather conditions, wind speed, and a brief description of the weather.

## Technologies Used
- **HTML**: For structuring the app’s interface, including input fields and weather information display.
- **CSS**: For styling the app, creating a clean and responsive layout.
- **JavaScript**: To handle the logic of fetching data from the API and dynamically updating the UI with the weather information.
- **OpenWeatherMap API**: Used to retrieve real-time weather data.

## How It Works
1. The user inputs a city name into the provided text field.
2. Upon clicking the "Get Weather" button, a request is sent to the **OpenWeatherMap API** to retrieve the weather information for that city.
3. The app receives the response and displays the following details:
   - Temperature
   - Weather conditions (e.g., sunny, rainy)
   - Wind speed
   - Additional weather descriptions

## Setup & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/sachin59921/BYTEUPRISE_WD_04.git 
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Open `index.html` in your browser to run the application.

4. **Note**: To make the app functional, you'll need an API key from [OpenWeatherMap](https://openweathermap.org/). Once you get the key, insert it into your JavaScript file where the API request is being made.

   Example:
   ```javascript
   const apiKey = 'YOUR_API_KEY';
   ```

