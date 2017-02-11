import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import themes from './styles/themes';

export default class Header extends Component {
  render() {
    const { children, currentTheme } = this.props;
    const styles = StyleSheet.create(this.props.styles);

    return <View>
      <StatusBar barStyle={themes[currentTheme].barStyle} />
      <View style={styles.header}>
        { children }
      </View>
    </View>
  }
}
