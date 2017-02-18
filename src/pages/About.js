import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Header';
import OpenLink from '../OpenLink';

const socialIcons = [
  { name: "logo-facebook", url: "https://www.facebook.com/marie.zamzhitskaya" },
  { name: "logo-github", url: "https://github.com/marizamj" },
  { name: "logo-linkedin", url: "https://www.linkedin.com/in/zamzhitskaya/" },
  { name: "ios-mail", url: "mailto:marizamj@gmail.com" },
];

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
          store data. You also can
          <OpenLink url="https://github.com/marizamj/ethnic-grocery-stores"
          inline={true}> <Text style={styles.pLink}>
          find (and star ★)
          </Text> </OpenLink>it on my Github page.
        </Text>
        <Text style={styles.p}>
          If you have any comments or suggestions (or even if
          you want to hire me), please contact me via following
          links:
        </Text>
        <View style={[styles.flexRow, { marginTop: 30, justifyContent: 'center' }]}>
        {
          socialIcons.map(icon =>
            <OpenLink key={icon.name} url={icon.url}>
              <Icon style={styles.aboutIcons} name={icon.name} />
            </OpenLink>)
        }
        </View>
      </ScrollView>
    </View>
  }
};
