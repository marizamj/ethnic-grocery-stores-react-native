import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import Menu from './Menu';
import MapView from './MapView';

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
    const { menu, stores, storesToShow, storeTypes, user } = this.state;

    const width = this.animatedValue.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ 0, 250 ]
    });

    return <View style={styles.flexOne}>
      <Header currentTheme={currentTheme} styles={this.props.styles}>
        <Icon onPress={() => this.setState({ menu: !menu })}
          style={styles.headerIcon} name="ios-menu" />
        <View>
          <Text style={styles.headerText}>
            All stores <Icon style={styles.headerDropdownIcon} name="ios-arrow-down" />
          </Text>
        </View>
        <Icon onPress={() => navigator.push({ title: 'Search' })}
          style={styles.headerIcon} name="ios-search" />
      </Header>

      <View style={[ styles.flexOne, styles.flexRow ]}>

        <MapView stores={stores} styles={this.props.styles}
          currentTheme={currentTheme}
          onCloseMenu={ () => {
            if (menu) this.setState({ menu: false });
          }} onOpenStore={ store => this.props.onOpenStore(store) } />

        <Animated.View style={[{ width }, styles.menu]}>
          <Menu styles={this.props.styles} user={user}
          onAbout={ () => this.closeMenuAndPushRoute('About') }
          onSettings={ () => this.closeMenuAndPushRoute('Settings') } />
        </Animated.View>

      </View>
    </View>
  }
}
