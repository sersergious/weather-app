import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Searchbar from "./components/Search";
import Weather from "./components/Weather";

function App() {

  const [weatherData, setWeatherData] = useState([]);

  const updateWeatherData = (data) => {
    setWeatherData(data);
  }

  return (
      <div className="flex flex-col w-full h-screen text-gray-900 ">

              <Header />
              <Searchbar updateWeatherData = {updateWeatherData} />
              <Weather weatherData = {weatherData} />

      </div>
  );
}

export default App;