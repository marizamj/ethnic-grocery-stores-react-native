import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Menu extends Component {
  menuFields = [
    {
      title: 'Add store',
      icon: 'ios-add-circle-outline',
      onPress: this.props.onAddStore,
      needsAuth: false,
    },
    {
      title: 'About',
      icon: 'ios-information-circle-outline',
      onPress: this.props.onAbout,
      needsAuth: false,
    },
    {
      title: 'Share',
      icon: 'ios-share-outline',
      onPress: this.props.onShare,
      needsAuth: false,
    },
    {
      title: 'Settings',
      icon: 'ios-settings-outline',
      onPress: this.props.onSettings,
      needsAuth: false,
    },
    {
      title: 'Sign out',
      icon: 'ios-log-out',
      onPress: this.props.onSignOut,
      needsAuth: true,
    }
  ];

  render() {
    const styles = StyleSheet.create(this.props.styles);

    const { user } = this.props;

    return <View>
      <ScrollView>
      {
        user ?
          <Image source={{ uri: user.coverUrl }} style={styles.userCover}>
            <View style={styles.userContainer}>
              <Image source={{ uri: user.imageUrl }} style={styles.userImage} />
              <Text style={styles.userName}>Hola, {user.firstName}</Text>
            </View>
          </Image>
          :
          <TouchableOpacity onPress={() => this.props.onSignIn()}>
            <View style={styles.menuSignIn}>
              <Icon name="ios-contact-outline" style={styles.menuSignInIcon} />
              <Text style={styles.menuSignInText}>Sign in</Text>
            </View>
          </TouchableOpacity>
      }

      {
        this.menuFields.map( field =>
          user || !field.needsAuth ?
            <TouchableOpacity key={field.title}
              style={styles.menuListItem} onPress={field.onPress}>
              <View style={[styles.flexRow, styles.flexOne]}>
                <Icon name={field.icon} style={styles.menuListItemIcon} />
                <Text style={styles.menuListItemText}>{field.title}</Text>
              </View>
            </TouchableOpacity>
          : null )
      }
      </ScrollView>
    </View>
  }
}
