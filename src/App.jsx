import './App.css'
import { useEffect, useState } from 'react'
import Navbar from '../src/components/Navbar'
import MainWeather from '../src/components/MainWeather'
import TodayHighlights from '../src/components/TodayHighlights'
import FiveDayForecast from '../src/components/FivedayForecast'
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState("London");
  const [airQualityData, setAirQualityData] = useState(null)
  const [fiveDayForecast, setFiveDayForecast] = useState(null)

  useEffect(() => {
    fetchWeatherData(city)
  }, [city])

  const fetchAirQualityData = (lat, lon) => {
    const API_KEY = import.meta.env.VITE_APP_ID;
    axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then(res => {
        setAirQualityData(res.data.list[0])
      })
      .catch(err => console.log("Error fetching the air quality data: ", err))
  }

  const fetchWeatherData = (city) => {
    const API_KEY = "e7f620f146bc4f1960e6bd1833414e28"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data)
        console.log(JSON.stringify(data))
        fetchAirQualityData(data.coord.lat, data.coord.lon)
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
          .then(res => {
            setFiveDayForecast(res.data);
          })
          .catch(err => console.error('Error fetching the 5-day forecast data:', err));
      })
      .catch(err => console.error('Error fetching the weather data:', err));
  }

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  }
  return (
    <div className="app-container">
      <Navbar onSearch={handleSearch} />
      {weatherData && airQualityData && (
        <div className="dashboard-content">
          <div className="left-section">
            <MainWeather weatherData={weatherData} />
            <div className="forecast-section">
              <h3 className="section-title">Every 3 Hour Forecast</h3>
              {fiveDayForecast && <FiveDayForecast forecastData={fiveDayForecast} />}
            </div>
          </div>
          <div className="right-section">
            <TodayHighlights
              weatherData={weatherData}
              airQualityData={airQualityData}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App 
