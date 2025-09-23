import { useState, useEffect } from 'react';
import './App.css';

export default function City2() {
  const [delhiTemperature, setDelhiTemperature] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=28.704060&lon=77.102493&appid=9cb978c44a230fddefb2382f49ad5b14&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const delhiData = await response.json();
        setDelhiTemperature(`${delhiData.main.temp}°C`);
      } catch (error) {
        console.error('Failed to fetch Delhi weather:', error);
        setDelhiTemperature('--');
      }
    };

    fetchWeather();
  }, []); // The empty dependency array ensures this effect runs only once on mount.

  return (
    <>
      <div className='citytemp'>
        <p>Delhi: {delhiTemperature}</p>
      </div>
    </>
  );
}