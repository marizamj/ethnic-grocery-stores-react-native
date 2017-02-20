import React, { Component } from 'react';
import { StyleSheet, AlertIOS } from 'react-native';
import NativeMap from 'react-native-maps';
import { SvgMarker, AnimatedUserLocation } from './SvgMarker';
import themes from './styles/themes';
import { isInAmsterdam, amsterdamRegion } from './lib/geolocationLib';

export default class MapView extends Component {
  state = {
    initialRegion: null,
    currentPosition: null,
    positionChecked: false,
  }

  componentWillMount() {
    navigator.geolocation.watchPosition(
      position => {
        this.setState({ currentPosition: position.coords }, () => {
          if (!this.state.positionChecked) {
            this.checkPosition();
            this.setState({ positionChecked: true });
          }
        });
      }
    );
  }

  checkPosition = () => {
    if (!isInAmsterdam(this.state.currentPosition)) {
      this.setState({ initialRegion: amsterdamRegion });

      AlertIOS.alert(
        'This app shows only stores located in Amsterdam',
        'We noticed that you are too far away, so we\'ll show you Amsterdam area and hope to see you around here soon :-)'
      )
    } else {
      this.setState({
        initialRegion: {
          ...this.state.currentPosition,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }
      });
    }
  };

  render() {
    const styles = StyleSheet.create(this.props.styles);
    const { stores, currentTheme } = this.props;
    const { currentPosition, initialRegion } = this.state;

    return <NativeMap style={styles.flexOne}
      initialRegion={initialRegion}>

      {
        currentPosition ?
          <NativeMap.Marker coordinate={{
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude
          }}>
            <AnimatedUserLocation baseColor={themes[currentTheme].markerFirst}
              additionalColor={themes[currentTheme].markerSecond} />
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
