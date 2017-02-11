import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Easing } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import Menu from './Menu';
import Search from './Search';
import SvgMarker from './SvgMarker';
import themes from './styles/themes';

export default class App extends Component {
  state = {
    menu: false,
    stores: this.props.stores,
    storesToShow: this.props.storesToShow,
    storeTypes: this.props.storeTypes,
    user: this.props.user,
  };

  animatedValue = new Animated.Value(this.state.menu ? 1 : 0);

  componentWillReceiveProps({ stores, storesToShow, storeTypes, user }) {
    this.setState({ stores, storesToShow, storeTypes, user });
  }

  componentWillUpdate(_, nextState) {
    if (nextState.menu !== this.state.menu) {
      this.toggleMenu();
    }
  }

  toggleMenu = () => {
    Animated.timing(
      this.animatedValue,
      {
        toValue: this.state.menu ? 0 : 1,
        duration: 200,
        easing: Easing.inout
      }
    ).start();
  };

  closeMenuAndPushRoute = route => {
    this.setState({ menu: false });
    this.props.navigator.push({ title: route });
  };

  render() {
    const styles = StyleSheet.create(this.props.styles);
    const { currentTheme, navigator } = this.props;

    const width = this.animatedValue.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ 0, 250 ]
    });

    return <View style={styles.flexOne}>
      <Header currentTheme={currentTheme} styles={this.props.styles}>
        <Icon onPress={() => this.setState({ menu: !this.state.menu })}
          style={styles.headerIcon} name="ios-menu" />
        <View>
          <Text style={styles.headerText}>
            All stores <Icon style={styles.headerDropdownIcon} name="ios-arrow-down" />
          </Text>
        </View>
        <Icon onPress={() => navigator.push({ title: 'Search' })}
          style={styles.headerIcon} name="ios-search" />
      </Header>

      <MapView style={[ styles.flexOne, styles.flexRow ]}
        onStartShouldSetResponder={ e => {
          if (this.state.menu && e.nativeEvent.locationX > 250)
            this.setState({ menu: false });
        }} initialRegion={{
          latitude: 52.366017,
          longitude: 4.893490,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}>

        {
          this.state.stores.map(store =>
            <MapView.Marker key={store.id}
              style={{ marginTop: 200 }}
              coordinate={{
                latitude: store.latLng.lat,
                longitude: store.latLng.lng,
              }} onStartShouldSetResponder={ () => this.props.onOpenStore(store) }>
              <SvgMarker scale={0.3}
                baseColor={themes[currentTheme].markerFirst}
                additionalColor={themes[currentTheme].markerSecond} />
            </MapView.Marker>
          )
        }

        <Animated.View style={{ width }}>
          <Menu styles={this.props.styles} user={this.state.user}
          onAbout={ () => this.closeMenuAndPushRoute('About') }
          onSettings={ () => this.closeMenuAndPushRoute('Settings') }
          />
        </Animated.View>

      </MapView>

    </View>
  }
}

// image={markers[this.props.currentTheme]}
