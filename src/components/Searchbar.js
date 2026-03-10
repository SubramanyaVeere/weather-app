import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css";

function Searchbar({ fetchWeather }) {

const [city, setCity] = useState("");
const navigate = useNavigate();

const handleSearch = () => {

if(city.trim()==="") return;



navigate(`/forecast/${city.toLowerCase()}`);

};

return (
<div className="container mt-4">
<div className="row justify-content-center">

<div className="col-11 col-sm-10 col-md-8 col-lg-6">

<div className="input-group">

<input
type="text"
className="form-control"
placeholder="Enter city..."
value={city}
onChange={(e)=>setCity(e.target.value)}
onKeyDown={(e)=>{
  if(e.key==="Enter") handleSearch();
}}
/>

<button
className="btn btn-primary"
onClick={handleSearch}
> 
Search
</button>

</div>
</div>
</div>
</div>
);
}

export default Searchbar;