import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import stylesObj from './styles';

export default class Header extends Component {
  render() {
    return <View>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        { this.props.children }
      </View>
    </View>
  }
}

const styles = StyleSheet.create(stylesObj);
