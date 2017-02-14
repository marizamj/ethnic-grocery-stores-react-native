import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import NativeMap from 'react-native-maps';
import SvgMarker from '../../SvgMarker';
import themes from '../../styles/themes';

export default class StoreMapView extends Component {
  render() {
    const { store, currentTheme } = this.props;
    const { lat, lng } = store.latLng;
    const styles = StyleSheet.create(this.props.styles);

    return <NativeMap initialRegion={{
      latitude: lat + 0.0005,
      longitude: lng,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003
    }} style={styles.storeMap}>
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
