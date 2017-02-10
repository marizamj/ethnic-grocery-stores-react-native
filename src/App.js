import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Easing } from 'react-native';
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
    loadStoreTypes(storeTypes => this.setState({ storeTypes }));
    authListener(user => this.setState({ user }));
    loadStores(stores => this.setState({ stores, storesToShow: stores }));
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
    const width = this.animatedValue.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ 0, 250 ]
    });

    return <View style={styles.flexOne}>
      <Header>
        <Icon onPress={() => this.setState({ menu: !this.state.menu })}
          style={[ styles.headerIcon, { width: 45 } ]} name="navicon" />
        <View>
          <Text style={styles.headerText}>
            All stores
            <Icon color="white" size={20} name="chevron-down" />
          </Text>
        </View>
        <Icon onPress={() => this.props.navigator.push({ title: 'Search' })}
          style={styles.headerIcon} name="search" />
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
          <Menu user={this.state.user}
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
              }} image={require('../images/marker1.png')}>
            </MapView.Marker>
          )
        }

      </MapView>

    </View>
  }
}

const styles = StyleSheet.create(stylesObj);
