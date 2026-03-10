import  Header  from "./components/Header";
import "./styles/Theme.css";
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ForecastPage from "./pages/ForecastPage";


function App(){

const [theme, setTheme] = useState("light");

useEffect(() => {
  document.body.setAttribute("data-theme", theme);
}, [theme]);

const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};

  return (
       <div>
       <Header toggleTheme={toggleTheme} theme={theme} /> 

       <Routes>

      <Route path="/" element={<HomePage toggleTheme={toggleTheme} theme={theme} />}></Route>

      <Route path="/forecast/:city" element={<ForecastPage toggleTheme={toggleTheme} theme={theme} />}></Route>
    
      </Routes>
      </div>

  );
}

export default App