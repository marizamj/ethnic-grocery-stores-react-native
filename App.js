import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Animated, Easing } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/EvilIcons';

import Header from './Header';
import Menu from './Menu';
import Search from './Search';
import stylesObj from './styles';

import { loadStoreTypes, authListener, loadStores } from './helpers/firebaseLoaders';

const opposite = bin => bin === 0 ? 1 : 0;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: !true,
      search: false,
      stores: [],
      storesToShow: [],
      storeTypes: [],
      user: { email: '' },
      token: null,
    };

    this.animatedValue = new Animated.Value(this.state.menu ? 1 : 0);
  }

  componentDidMount() {
    loadStores(stores => this.setState({ stores, storesToShow: stores }));
    loadStoreTypes(storeTypes => this.setState({ storeTypes }));
    authListener(user => this.setState({ user }));
  }

  componentWillUpdate(nextProps, nextState) {
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

  changeFilter = () => {

  };

  openSearch = () => {

  };

  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ -500, 0 ]
    });

    return <View style={styles.flexOne}>
      <Header>
        <Icon onPress={() => this.setState({ menu: !this.state.menu })}
          style={styles.headerIcon} name="navicon" />
        <View onAccessibilityTap={this.changeFilter}>
          <Text style={styles.headerText}>
            All stores
            <Icon color="oldlace" size={20} name="chevron-down" />
          </Text>
        </View>
        <Icon onPress={this.openSearch}
          style={styles.headerIcon} name="search" />
      </Header>

      <MapView style={styles.flexOne}
        initialRegion={{
          latitude: 52.366017,
          longitude: 4.893490,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}>


        <Animated.View style={{ marginLeft, flex: 1 }}>
          <Menu onClose={() => {
            if (this.state.menu) this.setState({ menu: false });
          }} />
        </Animated.View>


        {
          this.state.stores.map(store =>
            <MapView.Marker key={store.id}
              coordinate={{
                latitude: store.latLng.lat,
                longitude: store.latLng.lng,
              }}>
              <Icon name="location" size={50} />
            </MapView.Marker>
          )
        }

      </MapView>

    </View>
  }
}

const styles = StyleSheet.create(stylesObj);
