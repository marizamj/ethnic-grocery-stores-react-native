import React, { Component } from 'react';
import { View, Text } from 'react-native';
import getStoreStyles from '../../styles/StoreStyles';

const weekDays = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ];

export default class StoreHours extends Component {
  render() {
    const { store, currentTheme } = this.props;
    const storeStyles = getStoreStyles(currentTheme);

    return <View style={storeStyles.hours}>
      <Text style={storeStyles.fieldTitle}>Hours:</Text>
      {
        weekDays.map(day =>
          <View style={storeStyles.hoursDay} key={day}>
            <Text style={storeStyles.hoursDayTitle}>
              { day + ':' }
            </Text>
            <Text style={storeStyles.hoursDayTime}>
              { store.hours[day.toLowerCase()] }
            </Text>
          </View>
        )
      }
    </View>;
  }
}
