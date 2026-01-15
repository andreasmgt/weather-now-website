import './fivedayforecast.css'
import { Sun } from 'lucide-react'

const FiveDayForecast = ({ forecastData }) => {
    if (!forecastData || forecastData.length === 0) {
    return <p>Loading forecast...</p>;
  }
    const forecast = forecastData?.list || [];

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "short",
        }).format(date);
    };

    return (
        <div className="forecast-container">
            {forecast.slice(0, 5).map((day, index) => (
                <div key={index} className="forecast-card">
                    <p className="forecast-day">{formatDate(day.dt_txt)}</p>
                    <div className="forecast-icon">
                        <Sun size={40} />
                    </div>
                    <div className="forecast-temps">
                        <span className="temp-max">{Math.round(day.main.temp_max)}°</span>
                        <span className="temp-min">{Math.round(day.main.temp_min)}°</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FiveDayForecast;