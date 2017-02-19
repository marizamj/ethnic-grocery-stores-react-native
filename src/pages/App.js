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
    filter: this.props.filter,
    stores: this.props.stores,
    storesToShow: this.props.storesToShow,
    storeTypes: this.props.storeTypes,
    user: this.props.user,
  };

  animatedMenuValue = new Animated.Value(this.state.menu ? 1 : 0);
  animatedMenuShadowValue = new Animated.Value(this.state.menu ? 1 : 0);
  animatedFiltersValue = new Animated.Value(this.state.showFilters ? 1 : 0);

  componentWillReceiveProps({ stores, storesToShow, storeTypes, user, filter }) {
    this.setState({ stores, storesToShow, storeTypes, user, filter });
  }

  componentWillUpdate(_, nextState) {
    const { menu, showFilters } = this.state;

    if (nextState.menu !== menu) {
      this.toggleAnimatedWindow(menu, this.animatedMenuValue, 200);
      this.toggleAnimatedWindow(menu, this.animatedMenuShadowValue, 200);
    }

    if (nextState.showFilters !== showFilters) {
      this.toggleAnimatedWindow(showFilters, this.animatedFiltersValue, 200);
    }
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

  render() {
    const styles = StyleSheet.create(this.props.styles);
    const { currentTheme, navigator } = this.props;
    const { menu, stores, storesToShow, storeTypes, user, filter, showFilters } = this.state;

    const menuMarginLeft = this.animatedMenuValue.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ -250, 0 ]
    });

    const menuShadowOpacity = this.animatedMenuValue.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ 0, 0.3 ]
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
            { filter + ' ' }
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
          onOpenStore={ store => this.props.onOpenStore(store, navigator) } />

        {
          menu ?
            <Animated.View style={[ styles.menuShadow, { opacity: menuShadowOpacity } ]}
              onStartShouldSetResponder={ () => this.setState({ menu: false }) } />
            : null
        }

        <Animated.View style={[ { marginLeft: menuMarginLeft }, styles.menu ]}>
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
          } onChangeFilter={ filter => {
            this.props.onChangeFilter(filter);
            this.setState({ showFilters: false });
          }} />
      </Animated.View>

    </View>
  }
}
