import "./App.css";
import React, { useState, useEffect } from "react";
import logo from "./logo.svg"

function App() {
const sunny = "./assests/sunny-video.mp4";
const rain = "/assests/rain.mp4";
const cloudy = "/assests/cloudy.mp4";
const storm = "/assests/storm.mp4";
// const logo = "/assests/logo.svg";
const defaultVideo = "/assests//default.mp4";
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoSrc, setVideoSrc] = useState("/assests/default.mp4")

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
      const condition = data.weather[0].main;

      if(condition === "Rain"){
        setVideoSrc(rain);
      }else if(condition === "Clouds"){
        setVideoSrc(cloudy);
      }else if(condition === "Thunderstorm"){
        setVideoSrc(storm);
      }else if(condition === "Sunny"){
        setVideoSrc(sunny);
      }else{
        setVideoSrc(defaultVideo);
      }
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
    setLoading(false);
  };



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
 
<video
  key={videoSrc}
  autoPlay
  loop
  muted
  playsInline
  className="background-video"
>
  <source src={videoSrc} type="video/mp4" />
</video>


<div className="hero">
  
    {!weather && (<img src={logo} className="logo" alt="Weather-logo"/>)}
  
  
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