import { useEffect, useState } from "react";
import "./Timewidget.css"

function TimeWidget(){

const [time,setTime] = useState(new Date());

useEffect(()=>{

const interval = setInterval(()=>{
setTime(new Date());
},1000);

return ()=> clearInterval(interval);

},[]);

const day = time.toLocaleDateString(undefined,{ weekday:'long'});
const date = time.toLocaleDateString(undefined,{
year:'numeric',
month:'long',
day:'numeric'
});

const timeString = time.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true
});

const [clock, period] = timeString.split(" ");
const formattedPeriod = period.toUpperCase();

return(

<div className="time-widget">

<div className="day">📅{day}</div>

<div className="date">{date}</div>

<div className="time">
  {clock} <span className="period">{formattedPeriod}</span>
</div>

</div>

);

}

export default TimeWidget;