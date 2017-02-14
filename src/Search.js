import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header';

export default class Search extends Component {
  render() {
    const styles = StyleSheet.create(this.props.styles);

    return <View style={[ styles.flexOne, styles.primaryBackground ]}>
      <Header currentTheme={this.props.currentTheme} styles={this.props.styles}>
        <Icon style={styles.headerIcon}
          name="ios-arrow-back" onPress={() => this.props.navigator.pop()} />
        <Text style={styles.headerText}>
          Search
        </Text>
        <View style={styles.iconPlaceholder} />
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
