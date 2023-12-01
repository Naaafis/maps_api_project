/* global google */
import React, { useState, useEffect } from 'react';
import { GoogleMap, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';
import '../styles/mapStyles.css';

const MapComponent = ({ destination, startLocation }) => {
    const [directions, setDirections] = useState(null);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDRq8DvKx9_E-NpS-C5N3dXDT_A5aBbs-4", // Replace with your API key
    });

    useEffect(() => {
        if (!isLoaded || !startLocation) return;

        const directionsService = new google.maps.DirectionsService();
        directionsService.route({
            origin: startLocation,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                setDirections(result);
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
    }, [isLoaded, startLocation, destination]);

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap
            // Map settings
            id='example-map'
            mapContainerStyle={{ width: '100%', height: '400px' }}
        >
            {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
    );
};

export default MapComponent;
