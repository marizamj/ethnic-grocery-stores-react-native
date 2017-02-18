import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import NativeMap from 'react-native-maps';
import SvgMarker from './SvgMarker';
import themes from './styles/themes';

export default class MapView extends Component {
  render() {
    const styles = StyleSheet.create(this.props.styles);
    const { stores, currentTheme } = this.props;

    return <NativeMap style={styles.flexOne}
      initialRegion={{
        latitude: 52.366017,
        longitude: 4.893490,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      }}>

      {
        stores.map(store =>
          <NativeMap.Marker key={store.id}
            style={{ paddingTop: 25 }}
            coordinate={{
              latitude: store.latLng.lat,
              longitude: store.latLng.lng,
            }} onStartShouldSetResponder={ (e) => {
              if (e.nativeEvent.locationY < 50) {
                this.props.onOpenStore(store);
              }
            }}>
            <SvgMarker scale={0.3}
              baseColor={themes[currentTheme].markerFirst}
              additionalColor={themes[currentTheme].markerSecond} />
          </NativeMap.Marker>
        )
      }
    </NativeMap>
  }
}
