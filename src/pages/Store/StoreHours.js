import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const weekDays = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ];

export default class StoreHours extends Component {
  render() {
    const { store } = this.props;
    const styles = StyleSheet.create(this.props.styles);

    return <View>
      <Text style={styles.storeFieldTitle}>Hours:</Text>
      {
        weekDays.map(day =>
          <View style={styles.storeHoursDay} key={day}>
            <Text style={styles.storeHoursDayTitle}>
              { day + ':' }
            </Text>
            <Text style={styles.storeHoursDayTime}>
              { store.hours[day.toLowerCase()] }
            </Text>
          </View>
        )
      }
    </View>;
  }
}
