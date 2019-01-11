import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '85%',
  position: 'absolute',
};

const houseOfPrayerLocation = {
    lat: 36.260932,
    lng: -85.376446
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={houseOfPrayerLocation}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCMW7y2mk17YGormy_VMcYwsph0Yut1dV4'
})(MapContainer);