import React, { useState } from "react";
import axios from "axios";
import "./weather.scss";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={dc0e8e8a43d6af5af84b7e33af70d790}&units=metric`
      );
      setWeatherData(response.data);
      setCity("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="weather-container"> 
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Feels like: {weatherData.main.feels_like}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
