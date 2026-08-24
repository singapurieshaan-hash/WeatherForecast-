# 🌤️ Weather Forecast App

A simple and responsive web application that allows users to check **current weather conditions and a 24-hour forecast for any location**.

The app uses the **Visual Crossing Weather API** to retrieve real-time weather data and the browser's **Geolocation API** to automatically display weather for the user's current location.

## 🌟 Features

* 📍 **Automatic Location Detection** — Displays weather based on the user's current location when permission is granted.
* 🔎 **Location Search** — Search for weather information in different cities and locations.
* 🌡️ **Current Temperature** — Displays the current temperature for the selected location.
* 💨 **Wind Speed** — Shows current wind conditions.
* 💧 **Humidity** — Displays the current humidity percentage.
* 🌧️ **Precipitation** — Shows current precipitation information.
* ☁️ **Weather Conditions** — Displays conditions such as clear, cloudy, rainy, etc.
* ⏱️ **24-Hour Forecast** — Provides hourly temperature and weather conditions for the next 24 hours.
* 📱 **Responsive Design** — Clean interface designed to work across different screen sizes.

## 🛠️ Technologies Used

* **HTML5** — Page structure
* **CSS3** — Styling and responsive interface
* **JavaScript** — Application logic and DOM manipulation
* **Fetch API** — Requests weather data from the API
* **Geolocation API** — Detects the user's current coordinates
* **Visual Crossing Weather API** — Provides current and forecast weather data

## ⚙️ How It Works

When the application loads:

1. The browser requests permission to access the user's location.
2. The Geolocation API retrieves the user's latitude and longitude.
3. The coordinates are sent to the Visual Crossing Weather API.
4. Current weather and hourly forecast data are returned as JSON.
5. JavaScript extracts the relevant weather information and dynamically updates the webpage.
6. Users can also search for another location to retrieve its weather information.

## 🚀 Running the Project

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate into the project:

```bash
cd YOUR_PROJECT_FOLDER
```

Open the project using a local development server such as **VS Code Live Server**.

> Geolocation may not work correctly when opening the HTML file directly using `file://`. Running the application through `localhost` is recommended.

## 🔑 API Configuration

This project uses the **Visual Crossing Weather API**.

Create an API key through Visual Crossing and keep the key private.

**Do not commit API keys or other credentials to a public GitHub repository.**

For a production application, API requests containing secret credentials should generally be handled through a secure backend rather than exposing the credential in frontend JavaScript.

## 📚 What I Learned

Building this project helped me practice:

* Working with external REST APIs
* Reading and accessing JSON data
* Using asynchronous `fetch()` requests
* Working with browser geolocation
* Manipulating the DOM with JavaScript
* Dynamically generating HTML elements
* Working with arrays using `forEach()`
* Handling user input and events
* Creating responsive interfaces with CSS
* Structuring frontend JavaScript into reusable functions

## 🔮 Future Improvements

Potential additions include:

* Weather icons based on current conditions
* Multi-day forecasts
* Fahrenheit/Celsius switching
* Improved error handling for invalid locations
* Loading indicators
* Search history
* Improved mobile responsiveness
* Secure backend API handling

## 📊 Data Source

Weather information is provided by **Visual Crossing Weather**.

## 📄 License

© 2026. All rights reserved.
