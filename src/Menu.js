import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import stylesObj from './styles';

export default class Menu extends Component {
  state={
    user: this.props.user
  }

  render() {
    return <View style={styles.menu}>
      <ScrollView>
      {
        this.state.user.email ?
          <View style={styles.user}>

          </View>
          :
          <View style={styles.signIn}>
            <Icon name="user" style={styles.signInIcon} />
            <Text style={styles.signInText}>Sign in</Text>
          </View>
      }

      {
        [
          { title: 'About', icon: 'question', onPress: () => {
            this.props.onAbout();
          }},
          { title: 'Add store', icon: 'plus', onPress: () => {

          }},
          { title: 'Share', icon: 'share-apple', onPress: () => {

          }}
        ].map(el =>
          <TouchableHighlight key={el.title} underlayColor="white"
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

const styles = StyleSheet.create(stylesObj);
