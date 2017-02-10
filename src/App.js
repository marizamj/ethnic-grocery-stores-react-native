import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Easing } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import Menu from './Menu';
import Search from './Search';
import markers from './markers';

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

  render() {
    const styles = StyleSheet.create(this.props.styles);

    const width = this.animatedValue.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ 0, 250 ]
    });

    return <View style={styles.flexOne}>
      <Header styles={this.props.styles}>
        <Icon onPress={() => this.setState({ menu: !this.state.menu })}
          style={styles.headerIcon} name="ios-menu" />
        <View>
          <Text style={styles.headerText}>
            All stores <Icon color="white" size={15} name="ios-arrow-down" />
          </Text>
        </View>
        <Icon onPress={() => this.props.navigator.push({ title: 'Search' })}
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

        <Animated.View style={{ width }}>
          <Menu styles={this.props.styles} user={this.state.user}
            onAbout={() => {
              this.setState({ menu: false });
              this.props.navigator.push({ title: 'About' });
            }} />
        </Animated.View>

        {
          this.state.stores.map(store =>
            <MapView.Marker key={store.id}
              coordinate={{
                latitude: store.latLng.lat,
                longitude: store.latLng.lng,
              }} image={markers[this.props.currentTheme]}
              onPress={ () => this.props.onOpenStore(store) } />
          )
        }

      </MapView>

    </View>
  }
}
