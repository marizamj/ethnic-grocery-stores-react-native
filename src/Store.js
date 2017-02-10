import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import markers from './markers';

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

export default class Search extends Component {
  render() {
    const { store } = this.props;
    const { lat, lng } = store.latLng;
    const styles = StyleSheet.create(this.props.styles);

    return <View style={[ styles.flexOne, styles.primaryBackground ]}>
      <Header styles={this.props.styles}>
        <Icon style={styles.headerIcon}
          name="ios-arrow-back" onPress={() => this.props.navigator.pop()} />
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
              elemToRender = <MapView key={field} initialRegion={{
                latitude: lat + 0.0005,
                longitude: lng,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003
              }} style={styles.storeMap}>
                <MapView.Marker coordinate={{
                  latitude: lat,
                  longitude: lng,
                }} image={markers[this.props.currentTheme]} />
              </MapView>;
              break;

            case 'QuickContacts':
              elemToRender = <View key={field} style={styles.storeQuickContacts}>
                <Icon name="ios-call-outline" style={styles.storeQuickContactsIcon} />
                <Icon name="ios-globe-outline" style={styles.storeQuickContactsIcon} />
                <Icon name="ios-mail-outline" style={styles.storeQuickContactsIcon} />
              </View>;
              break;

            case 'Hours':
              elemToRender = <View key={field} style={styles.storeField}>
                <Text style={styles.storeFieldTitle}>Hours:</Text>
                <Text style={styles.storeFieldText}>! placeholder !</Text>
              </View>;
              break;

            default:
              elemToRender = <View key={field} style={styles.storeField}>
                <Text style={styles.storeFieldTitle}>{ field }:</Text>
                <Text style={styles.storeFieldText}>
                  { store[field.toLowerCase()] }
                </Text>
              </View>
          }

          return elemToRender;
        })
      }
      </ScrollView>

    </View>
  }
}
