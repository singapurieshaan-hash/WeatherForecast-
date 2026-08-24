const SearchButton = document.querySelector('#search');
const Submit = document.querySelector('#submit');

Submit.addEventListener('click', (event) => {
    event.preventDefault();

    const searchwhat = SearchButton.value;
    getWeather(searchwhat);
});

navigator.geolocation.getCurrentPosition((position) => {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const curretLocation = `${latitude},${longitude}`;
    getWeather(curretLocation);
},

(error) => {
    console.error('Location access denied or unavailable:', error);
}
);


function getWeather(location) {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=NYZTQLBRB4TS6F49EP99T47R2`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.querySelector('#current-weather').style.display = 'flex';
            document.querySelector('#forecast-container').style.display = 'block';

            document.querySelector('#locationn').innerHTML = data.resolvedAddress;


            document.querySelector('#temperature').innerHTML =
                `Temperature: ${data.currentConditions.temp}°F`;

            document.querySelector('#windspeed').innerHTML =
                `Wind Speed: ${data.currentConditions.windspeed} mph`;

            document.querySelector('#humidity').innerHTML =
                `Humidity: ${data.currentConditions.humidity}%`;

            document.querySelector('#rain').innerHTML =
                `Rain: ${data.currentConditions.precip}`;

            document.querySelector('#generalweather').innerHTML =
                `General Weather: ${data.currentConditions.conditions}`;

            const hourlyForecast =
                document.querySelector('#hourly-forecast');

            hourlyForecast.innerHTML = '';

            data.days[0].hours.forEach(hour => {
                const hourCard = document.createElement('div');

                hourCard.classList.add('hour-card');

                hourCard.innerHTML = `
                    <p>${hour.datetime.slice(0, 5)}</p>
                    <h3>${hour.temp}°F</h3>
                    <p>${hour.conditions}</p>
                `;

                hourlyForecast.appendChild(hourCard);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
