import { useState, useEffect } from "react";
import "./App.css";

function Item3() {
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const forecastData = [];
    const today = new Date();

    //COULD NOT FIND AN API FOR FORCECASTING WEATHER OF UP COMING 8 DAYS. THIS OBJECT COULD BE THE MIRROR OF JSON RESPONSE OF AN API.
    const data1 = {
      city: {
        id: 3163858,
        name: "Zocca",
        coord: { lon: 10.99, lat: 44.34 },
        country: "IT",
        population: 4593,
        timezone: 7200,
      },
      cod: "200",
      message: 0.0582563,
      cnt: 7,
      list: [
        {
          dt: 1661857200,
          temp: {
            day: 299.66,
            min: 288.93,
            max: 299.66,
            night: 290.31,
            eve: 297.16,
            morn: 288.93,
          },
          weather: [
            { id: 500, main: "Rain", description: "clear sky", icon: "01d" },
          ],
        },
        {
          dt: 1661943600,
          temp: {
            day: 295.76,
            min: 287.73,
            max: 295.76,
            night: 289.37,
            eve: 292.76,
            morn: 287.73,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
        },
        {
          dt: 1662030000,
          temp: {
            day: 293.38,
            min: 287.06,
            max: 293.38,
            night: 287.06,
            eve: 289.01,
            morn: 287.84,
          },
          weather: [
            { id: 500, main: "Rain", description: "haze", icon: "50d" },
          ],
        },
        {
          dt: 1661857200,
          temp: {
            day: 299.66,
            min: 288.93,
            max: 299.66,
            night: 290.31,
            eve: 297.16,
            morn: 288.93,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
        },
        {
          dt: 1661943600,
          temp: {
            day: 295.76,
            min: 287.73,
            max: 295.76,
            night: 289.37,
            eve: 292.76,
            morn: 287.73,
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "scattered clouds",
              icon: "03d",
            },
          ],
        },
        {
          dt: 1662030000,
          temp: {
            day: 293.38,
            min: 287.06,
            max: 293.38,
            night: 287.06,
            eve: 289.01,
            morn: 287.84,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
        },
        {
          dt: 1661857200,
          temp: {
            day: 299.66,
            min: 288.93,
            max: 299.66,
            night: 290.31,
            eve: 297.16,
            morn: 288.93,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
        },
        {
          dt: 1661943600,
          temp: {
            day: 295.76,
            min: 287.73,
            max: 295.76,
            night: 289.37,
            eve: 292.76,
            morn: 287.73,
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "overcast couds",
              icon: "04d",
            },
          ],
        },
      ],
    };

    const daysToShow = Math.min(data1.list.length, 8);

    for (let i = 0; i < daysToShow; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);

      const forecastItem = data1.list[i];

      forecastData.push({
        date: nextDay.getDate(),
        day: weekday[nextDay.getDay()],
        icon: `http://openweathermap.org/img/wn/${forecastItem.weather[0].icon}@2x.png`,
        description: `${forecastItem.weather[0].description}`,
        maxTemp: `${Math.round(forecastItem.temp.max - 273.15)}°C`,
        minTemp: `${Math.round(forecastItem.temp.min - 273.15)}°C`,
      });
    }

    setDailyForecast(forecastData);
  }, []);

  return (
    <div className="item item3">
      {dailyForecast.map((day, index) => (
        <div key={index} className={`day day${index + 1}`}>
          <p className="dailydate">{day.date}</p>
          <p className="dailyday">{day.day}</p>
          <p className="dailyicon">
            <img src={day.icon}></img>
          </p>
          <p className="dailydescription">{day.description}</p>
          <p className="dailymax">Max: {day.maxTemp}</p>
          <p className="dailymin">Min: {day.minTemp}</p>
        </div>
      ))}
    </div>
  );
}

export default Item3;
