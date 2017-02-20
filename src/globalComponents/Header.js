import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import themes from '../themes/themes';
import getHeaderStyles from '../styles/HeaderStyles';

export default class Header extends Component {
  render() {
    const { children, currentTheme } = this.props;
    const headerStyles = getHeaderStyles(currentTheme);

    return <View>
      <StatusBar barStyle={themes[currentTheme].barStyle} />
      <View style={headerStyles.container}>
        { children }
      </View>
    </View>
  }
}
