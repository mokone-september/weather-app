# Weather App

A simple React-based weather application that fetches and displays weather data for a given city using the OpenWeatherMap API.

## Features

1. **Search by City**: Enter a city name to get current weather information.
2. **Temperature Units**: Switch between Celsius and Fahrenheit.
3. **Weather Details**: Displays temperature, weather condition, humidity, and wind speed.
4. **Error Handling**: Shows error messages for invalid city names or API issues.
5. **Responsive Design**: Works on both desktop and mobile devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **OpenWeatherMap API**: Provides weather data for cities worldwide.
- **TypeScript**: Adds static typing to JavaScript for better code quality.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- An API key from OpenWeatherMap.

### Installation

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/mokone-september/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**:
   
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   
   - Create a `.env` file in the root directory.
   - Add your OpenWeatherMap API key:
     
     ```bash
     REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
     ```

4. **Run the app**:
   
   ```bash
   npm start
   ```

5. **Open the app**:
   
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.