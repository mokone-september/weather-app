const baseUrl = 'https://api.openweathermap.org/data/2.5';
const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // <-- use Vite-style env var

type CityInput = string | { lat: number; lng: number };

export const fetchWeatherData = async (city: CityInput) => {
  const params = new URLSearchParams();

  if (typeof city === 'string') {
    params.append('q', city);
  } else {
    params.append('lat', city.lat.toString());
    params.append('lon', city.lng.toString());
  }

  params.append('appid', apiKey);

  const response = await fetch(`${baseUrl}/weather?${params}`);
  return response.json();
};

export const fetchExtendedForecastData = async (city: CityInput) => {
  const params = new URLSearchParams();

  if (typeof city === 'string') {
    params.append('q', city);
  } else {
    params.append('lat', city.lat.toString());
    params.append('lon', city.lng.toString());
  }

  params.append('appid', apiKey);

  const response = await fetch(`${baseUrl}/forecast?${params}`);
  return response.json();
};
