import "./LocalWeather.css";

function LocalWeather({ weather }) {

  if (!weather || !weather.main) {
    return <div className="weather-card">Loading Weather...</div>;
  }

  return (
    <div className="weather-card">

      <h2>{weather.name}</h2>

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <p>{weather.weather[0].description}</p>

      <div className="weather-details">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} km/h</p>
      </div>

    </div>
  );
}

export default LocalWeather;