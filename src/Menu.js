import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Menu extends Component {
  state = {
    user: this.props.user
  }

  render() {
    const styles = StyleSheet.create(this.props.styles);

    return <View style={styles.menu}>
      <ScrollView>
      {
        this.state.user.email ?
          <View style={styles.user}>

          </View>
          :
          <View style={styles.signIn}>
            <Icon name="ios-contact-outline" style={styles.signInIcon} />
            <Text style={styles.signInText}>Sign in</Text>
          </View>
      }

      {
        [
          { title: 'About', icon: 'ios-help-circle-outline', onPress: () => {
            this.props.onAbout();
          }},
          { title: 'Add store', icon: 'ios-add-circle-outline', onPress: () => {

          }},
          { title: 'Share', icon: 'ios-share-outline', onPress: () => {

          }},
          { title: 'Settings', icon: 'ios-settings-outline', onPress: () => {
            this.props.onSettings();
          }}
        ].map( el =>
          <TouchableHighlight key={el.title} underlayColor="transparent"
            style={styles.menuListItem} onPress={el.onPress}>
            <View style={[styles.flexRow, styles.flexOne]}>
              <Icon name={el.icon} style={styles.menuListItemIcon}>
              </Icon>
              <Text style={styles.menuListItemText}>{el.title}</Text>
            </View>
          </TouchableHighlight>)
      }

      </ScrollView>
    </View>
  }
}
