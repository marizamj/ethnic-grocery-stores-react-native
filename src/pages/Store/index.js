import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../globalComponents/Header';
import OpenLink from '../../globalComponents/OpenLink';
import StoreMapView from './StoreMapView';
import StoreHours from './StoreHours';
import getStyles from '../../styles/styles';
import getHeaderStyles from '../../styles/HeaderStyles';
import getStoreStyles from '../../styles/StoreStyles';

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
    const styles = getStyles(currentTheme);
    const headerStyles = getHeaderStyles(currentTheme);
    const storeStyles = getStoreStyles(currentTheme);

    return <View style={styles.pageContainer}>
      <Header currentTheme={currentTheme}>
        <TouchableOpacity style={headerStyles.iconContainer}
          onPress={() => navigator.pop()}>
          <Icon style={headerStyles.icon} name="ios-arrow-back"  />
        </TouchableOpacity>
        <Text style={headerStyles.text}>
          { store.title }
        </Text>
        <View style={headerStyles.iconPlaceholder} />
      </Header>

      <Text style={storeStyles.type}>{store.type}</Text>
      <ScrollView>

      {
        fields.map(field => {
          let elemToRender;

          switch (field) {
            case 'Mapview':
              elemToRender = <StoreMapView key={field} store={store}
                currentTheme={currentTheme} />;
              break;

            case 'QuickContacts':
              elemToRender = <View key={field} style={storeStyles.quickContacts}>
                {
                  quickContacts.map(field =>
                    store[field.title] ?
                      <OpenLink key={'quickContacts:' + field.title}
                        prefix={field.prefix} url={store[field.title]}
                        currentTheme={currentTheme}>
                        <Icon name={field.icon}
                          style={storeStyles.quickContactsIcon} />
                      </OpenLink>
                      : null)
                }
              </View>;
              break;

            case 'Hours':
              elemToRender = <StoreHours store={store} key={field}
                currentTheme={currentTheme} />;
              break;

            case 'Address':
            case 'Description':
              elemToRender = store[field.toLowerCase()] ?
                <View key={field}>
                  <Text style={storeStyles.fieldTitle}>{ field }:</Text>
                  <Text style={storeStyles.fieldText}>
                    { store[field.toLowerCase()] }
                  </Text>
                </View>
                : null;
              break;

            default:
              elemToRender = store[field.toLowerCase()] ?
                <View key={field}>
                  <Text style={storeStyles.fieldTitle}>{ field }:</Text>
                  <OpenLink url={store[field.toLowerCase()]}
                    prefix={prefixes[field.toLowerCase()] || ''}
                    currentTheme={currentTheme} />
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
