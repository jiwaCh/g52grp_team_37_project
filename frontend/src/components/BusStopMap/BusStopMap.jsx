import React from 'react';
import proptypes from 'prop-types';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

/**
 * BusStopMap component
 *
 * @param {{lat: number, lng: number: children: React.ReactNode}} props BusStopMap props
 * @returns BustStopMap component
 */
const BusStopMap = ({ lat, lng, children }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCVEU4m1y47rfSc3bYbTyv4grYq6Z1bU9k',
  });

  const mapContainerStyle = {
    height: '30vh',
    width: '100%',
  };
  const position = {
    lat,
    lng,
  };

  return (
    <>
      {!isLoaded && 'loading...'}
      {loadError && loadError}
      {isLoaded && (
        <GoogleMap id="busStopMap" mapContainerStyle={mapContainerStyle} zoom={16} center={position}>
          <Marker position={position} />
        </GoogleMap>
      )}
      {children}
    </>
  );
};

BusStopMap.propTypes = {
  lat: proptypes.number.isRequired,
  lng: proptypes.number.isRequired,
  children: proptypes.node.isRequired,
};

export default BusStopMap;
