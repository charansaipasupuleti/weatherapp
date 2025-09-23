import { useState, useEffect } from "react";
import "./App.css";

function City1() {
  const [mumbaiTemperature, setMumbaiTemperature] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=19.076&lon=72.8777&appid=9cb978c44a230fddefb2382f49ad5b14&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const mumbaidata = await response.json();
        setMumbaiTemperature(`${mumbaidata.main.temp}°C`);
      } catch (error) {
        console.error("Failed to fetch Mumbai weather:", error);
        setMumbaiTemperature("--");
      }
    };

    fetchWeather();
  }, []);

  return (
    <>
      <div className="citytemp">
        <p>Mumbai: {mumbaiTemperature}</p>
      </div>
    </>
  );
}

export default City1;
