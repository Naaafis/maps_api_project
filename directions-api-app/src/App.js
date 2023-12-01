import React, { useState, useEffect } from 'react';
import MapComponent from './components/MapComponent';
import SearchBar from './components/SearchBar';
import './styles/mapStyles.css';
import './styles/searchBarStyles.css';

const App = () => {
  const [destination, setDestination] = useState('');
  const [startLocation, setStartLocation] = useState(null);

  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStartLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        console.error('Error getting current location: ', err);
        alert('Error getting current location. Please enable location services.');
        // Set a default location if unable to get current location
        setStartLocation({ lat: 41.85, lng: -87.65 }); // Default coordinates
      }
    );
  }, []);

  const handleSearch = (location) => {
    setDestination(location);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <MapComponent startLocation={startLocation} destination={destination} />
    </div>
  );
};

export default App;
