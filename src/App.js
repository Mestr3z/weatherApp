import React, { useState } from "react";
import SearchBar from "./components/searchBar.js";
import Weather from "./components/weather.js";
import Recommendation from "./components/recommendation.js";
import "./App.scss";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [recommendationData, setRecommendationData] = useState(null);

  const search = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=dc0e8e8a43d6af5af84b7e33af70d790`
    );
    const data = await response.json();

    if (data.cod === "404") {
      alert("Неправильно введён город. Попробуйте ещё раз.");
      return;
    }

    setCity(data.name);
    setWeatherData(data);
  };

  

  return (
    <div className="app">
      <SearchBar onSearch={search} />
      {weatherData && weatherData.main && (
        <div className="weather-recommendation">
          <Weather
            weatherData={weatherData && weatherData.main ? weatherData : null}
            city={city}
          />
          <Recommendation
            weatherData={
              weatherData && weatherData.main ? weatherData : null
            }
            recommendationData={recommendationData}
          />
        </div>
      )}
    </div>
  );
}

export default App;
