import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import Header from './Header';
import stylesObj from './styles';

export default class Search extends Component {
  render() {
    return <View style={[ styles.flexOne, { backgroundColor: 'white' } ]}>
      <Header>
        <Icon style={[styles.headerIcon, { marginLeft: 0, fontSize: 35 }]}
          name="chevron-left" onPress={() => this.props.navigator.pop()} />
        <Text style={styles.headerText}>
          Search
        </Text>
        <View style={{ width: 35 }} />
      </Header>

      <TextInput style={styles.search} placeholder="Search.." />

      <ScrollView>
        <View style={[ styles.searchResultsItem, styles.firstItem ]}></View>
        <View style={styles.searchResultsItem}></View>
        <View style={styles.searchResultsItem}></View>
      </ScrollView>

    </View>
  }
}

const styles = StyleSheet.create(stylesObj);
