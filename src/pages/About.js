import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Header';

export default class About extends Component {
  render() {
    const styles = StyleSheet.create(this.props.styles);

    return <View style={[ styles.flexOne, styles.primaryBackground ]}>
      <Header currentTheme={this.props.currentTheme} styles={this.props.styles}>
        <TouchableOpacity style={styles.headerIconContainer}
          onPress={() => this.props.navigator.pop()}>
          <Icon style={styles.headerIcon} name="ios-arrow-back"  />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          About this project
        </Text>
        <View style={styles.iconPlaceholder} />
      </Header>

      <ScrollView>
        <Text style={styles.p}>
          Hi there!
          My name is Marie and I created this app
          because I live in Amsterdam and really love trying
          and cooking new foods.
        </Text>
        <Text style={styles.p}>
          If you share my passion and know some cool place
          which is not on this map, please login via Google
          account and fill the form with it.
        </Text>
        <Text style={styles.p}>
          I created this project while learning how to code.
          It is powered by React Native and uses Firebase to
          store data. You also can find (and star ★) it on my
          Github page.
        </Text>
        <View style={[styles.flexRow, { marginTop: 30, justifyContent: 'center' }]}>
          <Icon style={styles.aboutIcons} name="logo-facebook" />
          <Icon style={styles.aboutIcons} name="logo-github" />
          <Icon style={styles.aboutIcons} name="logo-linkedin" />
          <Icon style={styles.aboutIcons} name="ios-mail" />
        </View>
      </ScrollView>
    </View>
  }
};
