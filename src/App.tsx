import { useState } from 'react';
import axios from 'axios';
import { WeatherData } from './types';

function App() {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async () => {
    try {
      const response = await axios.get<WeatherData>(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric', // Use 'imperial' for Fahrenheit
        },
      });
      setWeather(response.data);
      setError('');
    } catch {
      setError('City not found. Please try again.');
      setWeather(null);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <button
        onClick={fetchWeather}
        style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px' }}
      >
        Get Weather
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: '20px' }}>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;