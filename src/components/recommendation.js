import React from "react";
import "./recommendation.scss";

const Recommendation = ({ weatherData }) => {
  const temperature = Math.round(weatherData.main.temp);
  const weather = weatherData.weather[0].main.toLowerCase();
  const isCold = temperature < 0;
  const isWarm = temperature > 10 && temperature <= 15;
  const isHot = temperature > 25;
  const isMedium = temperature > 1 && temperature <= 10;

  return (
    <div className="recommendation-container">
      <h2>Погода и рекомендации</h2>
      <p>
        The temperature in {weatherData.name} is {temperature}°C, and the weather is {weather}.
      </p>
      <p>
        {isCold && "На улице холодно. Наденьте пальто, шапку и теплые ботинки."}
        {isMedium && "На улице прохладно. Наденьте кофту, легкую куртку и удобную обувь."}
        {isWarm && "На улице тепло. Наденьте штаны, футболку и легкую кофту"}
        {isHot && "На улице жарко. Наденьте легкую и свободную одежду. Например, футболку и шорты."}
      </p>
    </div>
  );
};

export default Recommendation;
