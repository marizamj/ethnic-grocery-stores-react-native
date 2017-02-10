import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import Header from './Header';
import stylesObj from './styles'

export default class About extends Component {
  render() {
    return <View style={[ styles.flexOne, { backgroundColor: 'white' } ]}>
      <Header>
        <Icon style={[styles.headerIcon, { marginLeft: 0, fontSize: 35 }]}
          name="chevron-left" onPress={() => this.props.navigator.pop()} />
        <Text style={styles.headerText}>
          About this project
        </Text>
        <View style={{ width: 35 }} />
      </Header>

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
        <Icon size={50} name="sc-facebook" />
        <Icon size={50} name="sc-github" />
        <Icon size={50} name="sc-linkedin" />
        <Icon size={50} name="envelope" />
      </View>
    </View>
  }
};

const styles = StyleSheet.create(stylesObj);
