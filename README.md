# GetWeather 
Weather Application

## Overview

This weather application allows users to view the current weather for their chosen location. Users can enter their city or country to see the weather conditions, including temperature, weather description, and an icon representing the weather.

## Features

- Allows users to input their location and view current weather information.
- Displays weather description, temperature, and an icon representing the weather condition.
- Responsive design suitable for various screen sizes.

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: EJS, HTML, CSS
- **API**: 
  - [Weatherstack API](https://weatherstack.com/) for weather data

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/weather-app.git
	cd weather-app
	npm install
	
2. Create an .env File:

Copy the .env.example file to .env and add your API keys.
.env Example:
WEATHER_API_KEY=your_weatherstack_api_key

3. Run the Application:

npm start
The application will be available at http://localhost:3000.


API Key
You will need to sign up for an API key for the Weatherstack API. Add your API key to the .env file as shown in the installation instructions.

Usage
Open the Application: Navigate to http://localhost:3000 in your web browser.

Enter Your Location: Type your city or country in the provided input field to get the current weather information.

View Weather Information: The application will display the weather description, icon, and temperature for the chosen location.
