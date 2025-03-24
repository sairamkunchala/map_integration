import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = [];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 18.1124, // default latitude
  lng: 79.0193, // default longitude

};
const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: 'AIzaSyCrmP_HWSrnkXNq6g-UxKOjyFNGJQvi87k',
      libraries,
    });
  
    if (loadError) {
      return <div>Error loading maps</div>;
    }
  
    if (!isLoaded) {
      return <div>Loading maps</div>;
    }
    return (
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={6}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    );
  };
  
  export default Map;
  