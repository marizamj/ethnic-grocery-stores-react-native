import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import getMenuStyles from '../../styles/MenuStyles';

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
    const { currentTheme, user } = this.props;
    const menuStyles = getMenuStyles(currentTheme);

    return <View>
      <ScrollView>
      {
        user ?
          <Image source={{ uri: user.coverUrl }} style={menuStyles.userCover}>
            <View style={menuStyles.userContainer}>
              <Image source={{ uri: user.imageUrl }} style={menuStyles.userImage} />
              <Text style={menuStyles.userName}>Hola, {user.firstName}</Text>
            </View>
          </Image>
          :
          <TouchableOpacity onPress={() => this.props.onSignIn()}>
            <View style={menuStyles.signIn}>
              <Icon name="ios-contact-outline" style={menuStyles.signInIcon} />
              <Text style={menuStyles.signInText}>Sign in</Text>
            </View>
          </TouchableOpacity>
      }

      {
        this.menuFields.map( field =>
          user || !field.needsAuth ?
            <TouchableOpacity key={field.title}
              style={menuStyles.listItem} onPress={field.onPress}>
              <Icon name={field.icon} style={menuStyles.listItemIcon} />
              <Text style={menuStyles.listItemText}>{field.title}</Text>
            </TouchableOpacity>
          : null )
      }
      </ScrollView>
    </View>
  }
}
