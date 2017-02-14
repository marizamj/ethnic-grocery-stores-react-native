import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Header';
import Menu from '../Menu';
import MapView from '../MapView';
import Filters from '../Filters';

export default class App extends Component {
  state = {
    menu: false,
    showFilters: false,
    filter: 'All stores',
    stores: this.props.stores,
    storesToShow: this.props.storesToShow,
    storeTypes: this.props.storeTypes,
    user: this.props.user,
  };

  animatedMenuValue = new Animated.Value(this.state.menu ? 1 : 0);
  animatedFiltersValue = new Animated.Value(this.state.showFilters ? 1 : 0);

  componentWillReceiveProps({ stores, storesToShow, storeTypes, user }) {
    this.setState({ stores, storesToShow, storeTypes, user });
  }

  componentWillUpdate(_, nextState) {
    if (nextState.menu !== this.state.menu) this.toggleMenu();
    if (nextState.showFilters !== this.state.showFilters) this.toggleFilters();
  }

  toggleMenu = () => {
    Animated.timing(
      this.animatedMenuValue,
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

  toggleFilters = () => {
    Animated.timing(
      this.animatedFiltersValue,
      {
        toValue: this.state.showFilters ? 0 : 1,
        duration: 200,
        easing: Easing.inout
      }
    ).start();
  };

  changeFilter = filter =>  {
    const filteredStoresToShow = filter === 'All stores' ?
      this.state.stores
      :
      this.state.stores.filter(store => store.type.match(filter));

    this.setState({
      filter,
      showFilters: false,
      storesToShow: filteredStoresToShow
    });
  };

  render() {
    const styles = StyleSheet.create(this.props.styles);
    const { currentTheme, navigator } = this.props;
    const { menu, stores, storesToShow, storeTypes, user, filter, showFilters } = this.state;

    const width = this.animatedMenuValue.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ 0, 250 ]
    });

    const height = this.animatedFiltersValue.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ 0, 250 ]
    });

    return <View style={styles.flexOne}>
      <Header currentTheme={currentTheme} styles={this.props.styles}>
        <Icon style={styles.headerIcon} name="ios-menu"
          onPress={() => this.setState({ menu: !menu })} />
        <View>
          <Text style={styles.headerText}
            onPress={ () => this.setState({ showFilters: !showFilters }) }>
            { this.state.filter + ' ' }
            <Icon style={styles.headerDropdownIcon} name="ios-arrow-down" />
          </Text>
        </View>
        <Icon onPress={() => navigator.push({ title: 'Search' })}
          style={styles.headerIcon} name="ios-search" />
      </Header>

      <View style={[ styles.flexOne, styles.flexRow ]}>

        <MapView stores={storesToShow} styles={this.props.styles}
          currentTheme={currentTheme}
          onCloseMenu={ () => {
            if (menu) this.setState({ menu: false });
          }} onOpenStore={ store => this.props.onOpenStore(store) } />

        <Animated.View style={[{ width }, styles.menu]}>
          <Menu styles={this.props.styles} user={user}
          onAbout={ () => this.closeMenuAndPushRoute('About') }
          onSettings={ () => this.closeMenuAndPushRoute('Settings') }
          onSignIn={ () => {  } }
          onShare={ () => {  }}
          onAddStore={ () => {  }} />
        </Animated.View>

      </View>

      <Animated.View style={[{ height }, styles.filters]}>
        <Filters styles={this.props.styles} storeTypes={storeTypes}
          filter={filter} onCloseFilter={ () =>
            this.setState({ showFilters: false })
          } onChangeFilter={this.changeFilter} />
      </Animated.View>

    </View>
  }
}
