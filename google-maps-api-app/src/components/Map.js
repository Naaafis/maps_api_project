import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  return (
    <LoadScript googleMapsApiKey='AIzaSyDRq8DvKx9_E-NpS-C5N3dXDT_A5aBbs-4'>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={{ lat: 0, lng: 0 }}
        zoom={10}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
