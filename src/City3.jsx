import { useState, useEffect } from 'react';
import './App.css';

export default function City3() {
  const [kolkataTemperature, setKolkataTemperature] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=22.572645&lon=88.363892&appid=9cb978c44a230fddefb2382f49ad5b14&units=metric`;
        
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const kolkataData = await response.json();
        setKolkataTemperature(`${kolkataData.main.temp}°C`);
      } catch (error) {
        console.error('Failed to fetch Kolkata weather:', error);
        setKolkataTemperature('--');
      }
    };

    fetchWeather();
  }, []); // The empty dependency array ensures this effect runs only once.

  return (
    <>
      <div className='citytemp'>
        <p>Kolkata: {kolkataTemperature}</p>
      </div>
    </>
  );
}