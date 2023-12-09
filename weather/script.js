function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const weatherInfo = document.getElementById('weatherInfo');
  
    // Replace the following with actual API call to get weather data
    const fakeWeatherData = {
      temperature: '25°C',
      condition: 'Sunny',
      location: locationInput.value
    };
  
    weatherInfo.innerHTML = `<p>${fakeWeatherData.location} Weather</p>
                             <p>Temperature: ${fakeWeatherData.temperature}</p>
                             <p>Condition: ${fakeWeatherData.condition}</p>`;
  }