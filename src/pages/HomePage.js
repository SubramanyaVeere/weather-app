import SearchBar from "../components/Searchbar";
import LocalWeather from "../components/LocalWeather";
import TimeWidget from "../components/Timewidget"
import logo from "../assests/logo.png";
import Footer from "../components/Footer"
import { useState, useEffect } from "react";
import "./HomePage.css";

function HomePage() {

  const [city] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_KEY;

  useEffect(() => {

    if (!navigator.geolocation) {
      console.log("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {


      try {

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appidd=${API_KEY}&units=metric`
        );

        const data = await response.json();

        setWeather(data);

      } catch (error) {
        console.log("Location weather error:", error);
      }

    });

  }, [API_KEY]);

  const fetchWeather = async (city) => {

    try {

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();

      setWeather(data);

    } catch (error) {
      console.log("Search weather error:", error);
    }

  };


  // ---------------------------
  // UI
  // ---------------------------

  return (

    <div className="homepage">
      <div className="widgets-time-weather-container">
      <div className="local-weather-container">
        <LocalWeather weather={weather} />
      </div>

      <div className="widgets-container">
       <TimeWidget/>
      </div>
      </div>

      <img
        src={logo}
        alt="weather logo"
        className="weather-logo"
      />

      <h1 className="title">Weather App</h1>

      <p className="subtitle">
        Search weather anywhere
      </p>


      <div className="search-container">
        <SearchBar fetchWeather={fetchWeather} />
      </div>
       

      

       <Footer/>
    </div>

  );
}

export default HomePage;