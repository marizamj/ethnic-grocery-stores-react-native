import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Easing, TouchableOpacity } from 'react-native';
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
    const { menu, showFilters } = this.state;

    if (nextState.menu !== menu)
      this.toggleAnimatedWindow(menu, this.animatedMenuValue, 200);
    if (nextState.showFilters !== showFilters)
      this.toggleAnimatedWindow(showFilters, this.animatedFiltersValue, 200);
  }

  toggleAnimatedWindow = (stateValue, animatedValue, duration) => {
    Animated.timing(
      animatedValue,
      {
        toValue: stateValue ? 0 : 1,
        duration: duration,
        easing: Easing.inout
      }
    ).start();
  };

  closeMenuAndPushRoute = route => {
    this.setState({ menu: false });
    this.props.navigator.push({ title: route });
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

    const menuWidth = this.animatedMenuValue.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ 0, 250 ]
    });

    const filtersHeight = this.animatedFiltersValue.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ 0, 250 ]
    });

    return <View style={styles.flexOne}>
      <Header currentTheme={currentTheme} styles={this.props.styles}>
        <TouchableOpacity style={styles.headerIconContainer}
          onPress={() => this.setState({ menu: !menu })}>
          <Icon style={styles.headerIcon} name="ios-menu" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => this.setState({ showFilters: !showFilters }) }>
          <Text style={styles.headerText}>
            { this.state.filter + ' ' }
            <Icon style={styles.headerDropdownIcon} name="ios-arrow-down" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerIconContainer}
          onPress={() => navigator.push({ title: 'Search' })}>
          <Icon style={styles.headerIcon} name="ios-search" />
        </TouchableOpacity>
      </Header>

      <View style={[ styles.flexOne, styles.flexRow ]}>

        <MapView stores={storesToShow} styles={this.props.styles}
          currentTheme={currentTheme}
          onCloseMenu={ () => {
            if (menu) this.setState({ menu: false });
          }} onOpenStore={ store => this.props.onOpenStore(store) } />

        <Animated.View style={[{ width: menuWidth }, styles.menu]}>
          <Menu styles={this.props.styles} user={this.props.user}
          onAbout={ () => this.closeMenuAndPushRoute('About') }
          onSettings={ () => this.closeMenuAndPushRoute('Settings') }
          onSignIn={ this.props.onSignIn }
          onSignOut={ this.props.onSignOut }
          onShare={ () => {  }}
          onAddStore={ () => this.closeMenuAndPushRoute('AddStore') } />
        </Animated.View>

      </View>

      <Animated.View style={[{ height: filtersHeight }, styles.filters]}>
        <Filters styles={this.props.styles} storeTypes={storeTypes}
          filter={filter} onCloseFilter={ () =>
            this.setState({ showFilters: false })
          } onChangeFilter={this.changeFilter} />
      </Animated.View>

    </View>
  }
}
