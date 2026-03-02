// import React, { useState } from "react";
import "./App.css";
import sunny from "./assets/sunny.mp4";
import rain from "./assets/rain.mp4";
import cloudy from "./assets/cloudy.mp4";
import storm from "./assets/storm.mp4";
import logo from "./assets/logo.svg";
import defaultVideo from "./assets/default.mp4";
import React, { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    const apiKey = process.env.REACT_APP_WEATHER_KEY;
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
    setLoading(false);
  };
let background = "";


let videoSrc = defaultVideo;

if (weather) {
  const condition = weather.weather[0].main;

  if (condition === "Rain") {
    videoSrc = rain;
  } 
  else if (condition === "Clouds") {
    videoSrc = cloudy;
  } 
  else if (condition === "Thunderstorm") {
    videoSrc = storm;
  } 
  else if (condition === "Clear") {
    videoSrc = sunny;
  }
}
const [currentTime, setCurrentTime] = useState("");

useEffect(() => {
  const updateTime = () => {
    const now = new Date();
    setCurrentTime(
      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  updateTime();
  const interval = setInterval(updateTime, 1000);

  return () => clearInterval(interval);
}, []);
  return(
     <div className="main-wrapper">
       <header className="header">
        <span>🌤 Weather</span>

        {weather && (
<div className="floating-weather">
  <h2>{currentTime}</h2>

  <p className="location">
    {weather ? weather.name : "Your Location"}
  </p>

  <div className="mini-weather">
    <span>
      {weather ? weather.weather[0].main : "Waiting..."}
    </span>

    <span>
      {weather ? Math.round(weather.main.temp) + "°C" : "--°C"}
    </span>
  </div>
</div>
)}
      </header>
    <div className={`app ${weather ? "has-weather" : "no-weather"}`}>
 {videoSrc && (
<video
  key={videoSrc}
  autoPlay
  loop
  muted
  className="background-video"
>
  <source src={videoSrc} type="video/mp4" />
</video>
)}

<div className="hero">
  {!weather && (
    <img src={logo} className="logo" />
  )}
  
  <h1 className="title">Weather App</h1>
</div>
      {loading && <p>Loading...</p>}
      <div className="search-section">


  <div className="search-box">
    <input
      type="text"
      placeholder="Enter city"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
    <button onClick={fetchWeather}>Search</button>
  </div>
</div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div className="card">
          <h2>{weather.name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt="weather icon"
          />
          <p>🌡 Temperature: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind Speed: {weather.wind.speed} m/s</p>
          <p>☁ Condition: {weather.weather[0].description}</p>
        </div>
      )}

   {/* Footer */}
  <footer className="footer">
  <div className="footer-left">
    © {new Date().getFullYear()} SubramanyaV weather-app | Software Engineer
  </div>

  <div className="footer-right">
    <a href="https://www.instagram.com/subbu.7_?igsh=MWRicmJjNGo0NW5ydg==" target="_blank" rel="noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://www.linkedin.com/in/subramanyav2002" target="_blank" rel="noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://x.com/SubramanyaV_" target="_blank" rel="noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://github.com/SubramanyaVeere" target="_blank" rel="noreferrer">
      <i className="fab fa-github"></i>
    </a>
    <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer">
      <i className="fab fa-whatsapp"></i>
    </a>
  </div>
</footer>
    </div>
    </div>
  );
}

export default App;