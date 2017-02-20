import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../globalComponents/Header';
import OpenLink from '../globalComponents/OpenLink';
import getStyles from '../styles/styles';
import getHeaderStyles from '../styles/HeaderStyles';

const socialIcons = [
  { name: "logo-facebook", url: "https://www.facebook.com/marie.zamzhitskaya" },
  { name: "logo-github", url: "https://github.com/marizamj" },
  { name: "logo-linkedin", url: "https://www.linkedin.com/in/zamzhitskaya/" },
  { name: "ios-mail", url: "mailto:marizamj@gmail.com" },
];

export default class About extends Component {
  render() {
    const { currentTheme, navigator } = this.props;
    const styles = getStyles(currentTheme);
    const headerStyles = getHeaderStyles(currentTheme);

    return <View style={styles.pageContainer}>
      <Header currentTheme={currentTheme}>
        <TouchableOpacity style={headerStyles.iconContainer}
          onPress={() => navigator.pop()}>
          <Icon style={headerStyles.icon} name="ios-arrow-back"  />
        </TouchableOpacity>
        <Text style={headerStyles.text}>
          About this project
        </Text>
        <View style={headerStyles.iconPlaceholder} />
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
          currentTheme={currentTheme}
          inline={true}> <Text style={styles.pLink}>
          find (and star ★)
          </Text> </OpenLink>it on my Github page.
        </Text>
        <Text style={styles.p}>
          If you have any comments or suggestions (or even if
          you want to hire me), please contact me via following
          links:
        </Text>
        <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'center' }}>
        {
          socialIcons.map(icon =>
            <OpenLink key={icon.name} url={icon.url} currentTheme={currentTheme}>
              <Icon style={styles.aboutIcons} name={icon.name} />
            </OpenLink>)
        }
        </View>
      </ScrollView>
    </View>
  }
};
