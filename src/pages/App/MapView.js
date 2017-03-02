import React, { Component } from 'react';
import NativeMap from 'react-native-maps';
import { SvgMarker, AnimatedUserLocation } from '../../globalComponents/SvgMarker';
import themes from '../../themes/themes';

export default class MapView extends Component {
  render() {
    const { stores, currentTheme, initialRegion, rotate, currentPosition } = this.props;

    return <NativeMap style={{ flex: 1 }}
      initialRegion={initialRegion}>

      {
        currentPosition ?
          <NativeMap.Marker coordinate={{
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude
          }}>
            <AnimatedUserLocation baseColor={themes[currentTheme].markerFirst}
              additionalColor={themes[currentTheme].markerSecond}
              rotate={currentPosition.heading} />
          </NativeMap.Marker>
        : null
      }


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
