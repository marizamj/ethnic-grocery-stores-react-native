import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Header';
import StoreMapView from './Store/StoreMapView';
import StoreHours from './Store/StoreHours';
import OpenLink from '../OpenLink';

const fields = [
  'Mapview',
  'QuickContacts',
  'Address',
  'Description',
  'Telephone',
  'Website',
  'Email',
  'Hours',
];

const prefixes = {
  telephone: 'tel:',
  email: 'mailto:'
};

const quickContacts = [
  { title: 'telephone', icon: 'ios-call-outline', prefix: prefixes.telephone },
  { title: 'website', icon: 'ios-globe-outline', prefix: '' },
  { title: 'email', icon: 'ios-mail-outline', prefix: prefixes.email },
];

export default class Store extends Component {
  render() {
    const { store, currentTheme, navigator } = this.props;
    const { lat, lng } = store.latLng;
    const styles = StyleSheet.create(this.props.styles);

    return <View style={[ styles.flexOne, styles.primaryBackground ]}>
      <Header currentTheme={currentTheme} styles={this.props.styles}>
        <TouchableOpacity style={styles.headerIconContainer}
          onPress={() => this.props.navigator.pop()}>
          <Icon style={styles.headerIcon} name="ios-arrow-back"  />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          { store.title }
        </Text>
        <View style={styles.iconPlaceholder} />
      </Header>

      <Text style={styles.storeType}>{store.type}</Text>
      <ScrollView>

      {
        fields.map(field => {
          let elemToRender;

          switch (field) {
            case 'Mapview':
              elemToRender = <StoreMapView key={field} store={store}
                currentTheme={currentTheme} styles={this.props.styles} />;
              break;

            case 'QuickContacts':
              elemToRender = <View key={field} style={styles.storeQuickContacts}>
                {
                  quickContacts.map(field =>
                    store[field.title] ?
                      <OpenLink key={'quickContacts:' + field.title}
                        prefix={field.prefix} url={store[field.title]}>
                        <Icon name={field.icon}
                          style={styles.storeQuickContactsIcon} />
                      </OpenLink>
                      : null)
                }
              </View>;
              break;

            case 'Hours':
              elemToRender = <StoreHours store={store} key={field}
                styles={this.props.styles} />;
              break;

            case 'Address':
            case 'Description':
              elemToRender = store[field.toLowerCase()] ?
                <View key={field}>
                  <Text style={styles.storeFieldTitle}>{ field }:</Text>
                  <Text style={styles.storeFieldText}>
                    { store[field.toLowerCase()] }
                  </Text>
                </View>
                : null;
              break;

            default:
              elemToRender = store[field.toLowerCase()] ?
                <View key={field}>
                  <Text style={styles.storeFieldTitle}>{ field }:</Text>
                  <OpenLink url={store[field.toLowerCase()]}
                    prefix={prefixes[field.toLowerCase()] || ''}
                    styles={this.props.styles} />
                </View>
                : null
          }

          return elemToRender;
        })
      }
      </ScrollView>
    </View>
  }
}
