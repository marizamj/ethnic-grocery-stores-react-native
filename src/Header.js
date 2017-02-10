import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

export default class Header extends Component {
  render() {
    const { children } = this.props;
    const styles = StyleSheet.create(this.props.styles);

    return <View>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        { children }
      </View>
    </View>
  }
}
