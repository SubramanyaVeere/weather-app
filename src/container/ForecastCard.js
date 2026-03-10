import "./ForecastCard.css"

function ForecastCard({ temp, weather, time, icon }) {



return(

<div className="forecast-card">


<h4>🕒{time}</h4>
<img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>
<h2>🌡️{temp}°C</h2>
<p>{weather}</p>

</div>

)

}

export default ForecastCard;