import { useState } from 'react'
import './navbar.css'
import { Cloud } from 'lucide-react';

const Navbar = ({ onSearch }) => {
    const [searchCity, setSearchCity] = useState('')

    const handleSearchClick = () => {
        if (searchCity.trim()) {
            onSearch(searchCity);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Cloud size={32} />
                    <h1>WeatherNow</h1>
                </div>
                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Search for a city..."
                        className="search-input"
                        value={searchCity}
                        onChange={(e) => setSearchCity(e.target.value)}
                    />
                    <button className="search-button" onClick={handleSearchClick}>Search</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
