import React, { Component } from 'react';
import { View, Text, Animated, Easing, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../globalComponents/Header';
import Menu from './Menu';
import MapView from './MapView';
import Filters from './Filters';
import getStyles from '../../styles/styles';
import getHeaderStyles from '../../styles/HeaderStyles';

export default class App extends Component {
  state = {
    menu: false,
    showFilters: false,
  };

  animatedMenuValue = new Animated.Value(this.state.menu ? 1 : 0);
  animatedMenuShadowValue = new Animated.Value(this.state.menu ? 1 : 0);
  animatedFiltersValue = new Animated.Value(this.state.showFilters ? 1 : 0);

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
    const { menu, showFilters } = this.state;
    const {
      currentTheme,
      currentPosition,
      positionChecked,
      storesToShow,
      navigator,
      initialRegion,
      storeTypes,
      stores,
      filter,
      user
    } = this.props;

    const styles = getStyles(currentTheme);
    const headerStyles = getHeaderStyles(currentTheme);

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

    return <View style={{ flex: 1 }}>
      <Header currentTheme={currentTheme}>
        <TouchableOpacity style={headerStyles.iconContainer}
          onPress={() => this.setState({ menu: !menu })}>
          <Icon style={headerStyles.icon} name="ios-menu" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => this.setState({ showFilters: !showFilters }) }>
          <Text style={headerStyles.text}>
            { filter + ' ' }
            <Icon style={headerStyles.dropdownIcon} name="ios-arrow-down" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={headerStyles.iconContainer}
          onPress={() => navigator.push({ title: 'Search' })}>
          <Icon style={headerStyles.icon} name="ios-search" />
        </TouchableOpacity>
      </Header>

      <View style={{ flex: 1, flexDirection: 'row' }}>

        <MapView stores={storesToShow} currentTheme={currentTheme}
          currentPosition={currentPosition} initialRegion={initialRegion}
          onOpenStore={ store => this.props.onOpenStore(store, navigator) } />

        {
          menu ?
            <Animated.View style={[ styles.menuShadow, { opacity: menuShadowOpacity } ]}
              onStartShouldSetResponder={ () => this.setState({ menu: false }) } />
            : null
        }

        <Animated.View style={[ { marginLeft: menuMarginLeft }, styles.menu ]}>
          <Menu currentTheme={currentTheme} user={user}
            onAbout={ () => this.closeMenuAndPushRoute('About') }
            onSettings={ () => this.closeMenuAndPushRoute('Settings') }
            onSignIn={ this.props.onSignIn }
            onSignOut={ this.props.onSignOut }
            onAddStore={ () => this.closeMenuAndPushRoute('AddStore') } />
        </Animated.View>

      </View>

      <Animated.View style={[{ height: filtersHeight }, styles.filters]}>
        <Filters currentTheme={currentTheme} storeTypes={storeTypes}
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
