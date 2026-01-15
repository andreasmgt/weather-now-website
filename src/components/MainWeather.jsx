import './mainWeather.css'
import { Sun, Moon, Snowflake, CloudSun, Cloud, Cloudy, CloudSunRain, CloudRain, CloudLightning, CloudFog } from 'lucide-react'

const MainWeather = ({ weatherData }) => {
    const temperatureCelcius = weatherData?.main?.temp || "N/A"
    const cityName = weatherData?.name || "city not available"
    const countryName = weatherData?.sys?.country || "Country not available"
    const timeStamp = weatherData?.dt || null
    const feelsLike = weatherData?.main?.feels_like || "N/A"
    const condition = weatherData?.weather?.[0]?.description || "N/A"

    const allIcons = {
        "01d": <Sun size={80} />,
        "01n": <Moon size={80} />,
        "02d": <CloudSun size={80} />,
        "02n": <CloudSun size={80} />,
        "03d": <Cloud size={80} />,
        "03n": <Cloud size={80} />,
        "04d": <Cloudy size={80} />,
        "04n": <Cloudy size={80} />,
        "09d": <CloudSunRain size={80} />,
        "09n": <CloudSunRain size={80} />,
        "10d": <CloudRain size={80} />,
        "10n": <CloudRain size={80} />,
        "11d": <CloudLightning size={80} />,
        "11n": <CloudLightning size={80} />,
        "13d": <Snowflake size={80} />,
        "13n": <Snowflake size={80} />,
        "50d": <CloudFog size={80} />,
        "50n": <CloudFog size={80} />
    }
    const icon = allIcons[weatherData?.weather?.[0].icon] || <Sun size={80} />

    const currentData = timeStamp ? new Date(timeStamp * 1000).toLocaleDateString("en-US",
        { weekday: "long", day: "numeric", month: "short" }) : "Date not Available"

    // console.log(condition)
    // console.log(feelsLike)
    return (
        <div className="main-weather-card">
            <div className="weather-header">
                <div className="location-info">
                    <h2>{cityName}, {countryName}</h2>
                    <p className="date">{currentData}</p>
                </div>
            </div>
            <div className="weather-content">
                <div className="temperature-section">
                    <div className="temp-display">
                        <span className="temp-value">{Math.round(temperatureCelcius)}</span>
                        <span className="temp-unit">°C</span>
                    </div>
                    <div className="weather-icon-large">
                        {icon}
                    </div>
                </div>
                <div className="weather-description">
                    <p className="condition">{condition}</p>
                    <p className="feels-like">Feels like {Math.round(feelsLike)}°C</p>
                </div>
            </div>
        </div>
    )
}

export default MainWeather
