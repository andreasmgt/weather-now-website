import { Wind, Droplets, Eye, Gauge, Thermometer, Sunrise, Sunset } from 'lucide-react';
import './todayhl.css'

const TodayHighlights = ({ weatherData, airQualityData }) => {
  const { main, visibility, sys } = weatherData;
  const airQualityIndex = airQualityData?.main?.aqi; // Accessing aqi from airQualityData.main
  const { co, no, no2, o3 } = airQualityData?.components || {};

  const renderAirQualityDescription = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "Unknown";
    }
  };

  const highlights = [
    { 
      title: "Humidity", 
      value: `${main.humidity}%`, 
    },

    {
      title: "Pressure",
      value: `${main.pressure} hPa`,
    },
    {
      title: "Visibility",
      value: `${visibility / 1000} km`,
    },
    {
      title: "Feels Like",
      value: `${main.feels_like}°C`,
    },
  ];

  return (
    <div className="highlights-section">
    <h3 className="section-title">Today's Highlights</h3>
    
    {/* Air Quality Card */}
    <div className="highlight-card air-quality-card">
      <div className="card-header">
        <h4>Air Quality Index</h4>
        <span className="aqi-badge">{renderAirQualityDescription(airQualityIndex)}</span>
      </div>
      <div className="card-content">
        <Wind size={40} className="card-icon" />
        <div className="aqi-grid">
          <div className="aqi-item">
            <span className="aqi-label">CO</span>
            <span className="aqi-value">{co}</span>
          </div>
          <div className="aqi-item">
            <span className="aqi-label">NO</span>
            <span className="aqi-value">{no}</span>
          </div>
          <div className="aqi-item">
            <span className="aqi-label">NO₂</span>
            <span className="aqi-value">{no2}</span>
          </div>
          <div className="aqi-item">
            <span className="aqi-label">O₃</span>
            <span className="aqi-value">{o3}</span>
          </div>
        </div>
      </div>
    </div>

    {/* Sunrise & Sunset Card */}
    <div className="highlight-card sunrise-card">
      <h4 className="card-title">Sunrise & Sunset</h4>
      <div className="sun-times">
        <div className="sun-time-item">
          <Sunrise size={40} />
          <p className="time-value">{new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
        </div>
        <div className="sun-time-item">
          <Sunset size={40} />
          <p className="time-value">{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
      </div>
    </div>

    {/* Other Highlights Grid */}
    <div className="highlights-grid">
      <div className="highlight-card small-card humidity-card">
        <div className="small-card-content">
          <p className="card-label">Humidity</p>
          <div className="card-value-row">
            <Droplets size={30} />
            <p className="card-value">{main.humidity}%</p>
          </div>
        </div>
      </div>

      <div className="highlight-card small-card pressure-card">
        <div className="small-card-content">
          <p className="card-label">Pressure</p>
          <div className="card-value-row">
            <Gauge size={30} />
            <p className="card-value">{main.pressure} hPa</p>
          </div>
        </div>
      </div>

      <div className="highlight-card small-card visibility-card">
        <div className="small-card-content">
          <p className="card-label">Visibility</p>
          <div className="card-value-row">
            <Eye size={30} />
            <p className="card-value">{main.visibility} km</p>
          </div>
        </div>
      </div>

      <div className="highlight-card small-card feels-card">
        <div className="small-card-content">
          <p className="card-label">Feels Like</p>
          <div className="card-value-row">
            <Thermometer size={30} />
            <p className="card-value">{main.feels_like}°C</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TodayHighlights