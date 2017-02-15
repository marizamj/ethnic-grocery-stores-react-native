import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Menu extends Component {
  state = {
    user: this.props.user,
  }

  menuFields = [
    {
      title: 'Add store',
      icon: 'ios-add-circle-outline',
      onPress: this.props.onAddStore
    },
    {
      title: 'About',
      icon: 'ios-information-circle-outline',
      onPress: this.props.onAbout
    },
    {
      title: 'Share',
      icon: 'ios-share-outline',
      onPress: this.props.onShare
    },
    {
      title: 'Settings',
      icon: 'ios-settings-outline',
      onPress: this.props.onSettings
    }
  ];

  render() {
    const styles = StyleSheet.create(this.props.styles);

    return <View>
      <ScrollView>
      {
        this.state.user.email ?
          <View style={styles.user}>

          </View>
          :
          <TouchableOpacity>
            <View style={styles.menuSignIn}>
              <Icon name="ios-contact-outline" style={styles.menuSignInIcon} />
              <Text style={styles.menuSignInText}>Sign in</Text>
            </View>
          </TouchableOpacity>
      }

      {
        this.menuFields.map( field =>
          <TouchableOpacity key={field.title}
            style={styles.menuListItem} onPress={field.onPress}>
            <View style={[styles.flexRow, styles.flexOne]}>
              <Icon name={field.icon} style={styles.menuListItemIcon}>
              </Icon>
              <Text style={styles.menuListItemText}>{field.title}</Text>
            </View>
          </TouchableOpacity>)
      }
      </ScrollView>
    </View>
  }
}
