/* global google */
import React, { useState, useEffect } from 'react';
import { GoogleMap, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';
import '../styles/mapStyles.css';

const MapComponent = ({ destination, startLocation }) => {
    const [directions, setDirections] = useState(null);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA5VJtsmtSXz3Eo3StLUalY96FhioCqEXI", // Replace with your API key
    });

    useEffect(() => {
        if (!isLoaded || !startLocation || !destination) return;

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

    const mapContainerStyle = {
        width: '100%',
        height: '400px', // You can adjust height as per your layout
    };

    // Default center of the map (can be adjusted)
    const defaultCenter = { lat: 41.85, lng: -87.65 };

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div className="map-container">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={directions ? directions.routes[0].overview_polyline : defaultCenter}
                zoom={7}
            >
                {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
        </div>
    );
};

export default MapComponent;
