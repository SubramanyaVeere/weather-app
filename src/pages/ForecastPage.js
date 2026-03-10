import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/Searchbar";
import Forecast from "../components/Forecast";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom"

import "./ForecastPage.css";

function ForecastPage(){

const {city} = useParams();


return(

<div className="forecast-page">

<div className="forecast-search">

<SearchBar />

</div>

<Forecast city={city}/>

<Footer/>

</div>

)

}

export default ForecastPage;