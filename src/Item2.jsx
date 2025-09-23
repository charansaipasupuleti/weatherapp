import { useState, useEffect } from "react";
import "./App.css";

function Item2({ location }) {
  const [weatherData, setWeatherData] = useState({
    temperature: "",
    feelslike: "",
    humidity: "",
    windSpeed: "",
    visibility: "",
    description: "",
    pname: "",
    icon: "",
  });
  const [isGeolocationAvailable, setIsGeolocationAvailable] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsGeolocationAvailable("geolocation" in navigator);
  }, []);

  useEffect(() => {
    const fetchWeather = async (query) => {
      setIsFetching(true);
      setError(null);

      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=9cb978c44a230fddefb2382f49ad5b14&units=metric`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("City not found or API error. Please try again.");
        }

        const data = await response.json();

        console.log(data);
        setWeatherData({
          temperature: `${Math.round(data.main.temp)}°C`,
          feelslike: `${Math.round(data.main.feels_like)}°C`,
          humidity: `${data.main.humidity}%`,
          windSpeed: `${data.wind.speed} m/s`,
          visibility: `${data.visibility} m`,
          description: data.weather[0].description,
          pname: data.name,
          icon: data.weather[0].icon,
        });
      } catch (err) {
        console.error("Fetch weather error:", err);
        setError(err.message);
      } finally {
        setIsFetching(false);
      }
    };

    const fetchWeatherFromGeolocation = () => {
      setIsFetching(true);
      setError(null);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9cb978c44a230fddefb2382f49ad5b14&units=metric`;
            const response = await fetch(url);

            if (!response.ok) {
              throw new Error("Geolocation weather fetch failed.");
            }
            const data = await response.json();

            console.log(data);
            setWeatherData({
              temperature: `${Math.round(data.main.temp)}°C`,
              feelslike: `${Math.round(data.main.feels_like)}°C`,
              humidity: `${data.main.humidity}%`,
              windSpeed: `${data.wind.speed} m/s`,
              visibility: `${data.visibility} m`,
              description: data.weather[0].description,
              pname: data.name,
              icon: data.weather[0].icon,
            });
          } catch (err) {
            console.error("Geolocation weather fetch error:", err);
            setError("Could not get weather for your location.");
          } finally {
            setIsFetching(false);
          }
        },
        (err) => {
          setError(`Geolocation error: ${err.message}`);
          setIsFetching(false);
        }
      );
    };

    if (location) {
      fetchWeather(location);
    } else if (isGeolocationAvailable) {
      fetchWeatherFromGeolocation();
    }
  }, [location, isGeolocationAvailable]);

  return (
    <>
      <div className="item item2">
        {isFetching ? (
          <p className="loading-message">Loading weather data...</p>
        ) : error ? (
          <p className="error-message">Error: {error}</p>
        ) : (
          <>
            <div className="body body1">
              <p>Location: {weatherData.pname || "N/A"}</p>
            </div>
            <div className="body body2">
              <p className="bodyicon">
                {weatherData.icon && (
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                    alt="Weather Icon"
                  />
                )}
              </p>
            </div>
            <div className="body body3">
              <p>{weatherData.temperature}</p>
            </div>
            <div className="body body4">
              <p>
                Feels Like:
                <br />
                {weatherData.feelslike}
              </p>
            </div>
            <div className="body body5">
              <p>
                Humidity:
                <br />
                {weatherData.humidity}
              </p>
            </div>
            <div className="body body6">
              <p>
                Wind Speed:
                <br />
                {weatherData.windSpeed}
              </p>
            </div>
            <div className="body body7">
              <p>
                Visibility:
                <br />
                {weatherData.visibility}
              </p>
            </div>
            <div className="body body8">
              <p>
                Weather:
                <br />
                {weatherData.description}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Item2;
