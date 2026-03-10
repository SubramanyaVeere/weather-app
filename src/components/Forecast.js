import { useEffect, useState } from "react";
import "./Forecast.css";
import ForecastCard from "../container/ForecastCard";

const API_KEY = process.env.REACT_APP_WEATHER_KEY;

function Forecast({city}){

const [forecast,setForecast] = useState([]);

useEffect(()=>{

async function loadForecast(){

const response = await fetch(
`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
);

const data = await response.json();

if(data.cod === "200"){
setForecast(data.list.slice(0,5));
}

}

loadForecast();

},[city]);

return(

<div className="forecast-container">

<h2>{city.charAt(0).toUpperCase()+city.slice(1)} Forecast</h2>

<div className="forecast-grid">

{forecast.map((item,index)=>(

<ForecastCard
key={index}
temp={item.main.temp}
weather={item.weather[0].main}
time={item.dt_txt}
icon={item.weather[0].icon}
/>

))}

</div>

</div>

)

}

export default Forecast;