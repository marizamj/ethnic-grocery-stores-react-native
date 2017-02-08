import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import stylesObj from './styles';

export default class Search extends Component {
  render() {
    return <TextInput style={styles.search} placeholder="Search.." />
  }
}

const styles = StyleSheet.create(stylesObj);
