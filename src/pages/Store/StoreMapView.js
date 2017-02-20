import React, { Component } from 'react';
import NativeMap from 'react-native-maps';
import { SvgMarker } from '../../globalComponents/SvgMarker';
import themes from '../../themes/themes';
import getStoreStyles from '../../styles/StoreStyles';

export default class StoreMapView extends Component {
  render() {
    const { store, currentTheme } = this.props;
    const { lat, lng } = store.latLng;
    const storeStyles = getStoreStyles(currentTheme);

    return <NativeMap initialRegion={{
      latitude: lat + 0.0005,
      longitude: lng,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003
    }} style={storeStyles.map}>
      <NativeMap.Marker coordinate={{
        latitude: lat,
        longitude: lng,
      }}>
        <SvgMarker scale={0.3}
          baseColor={themes[currentTheme].markerFirst}
          additionalColor={themes[currentTheme].markerSecond} />
      </NativeMap.Marker>
    </NativeMap>;
  }
}
