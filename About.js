import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

import Header from './Header';
import stylesObj from './styles'

export default class About extends Component {
  onGoBack() {

  }

  render() {
    return <View style={styles.flexOne}>
      <Header>
        <Text style={styles.headerText}>
          About this project
        </Text>
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
        It is using React to render the UI and Firebase to
        store data. You also can find (and star ★) it on my
        Github page.
      </Text>
      <View style={styles.btn}>
        <Button color="#f37e7f" onPress={this.onGoBack} title="← Back" />
      </View>
    </View>
  }
};

const styles = StyleSheet.create(stylesObj);
