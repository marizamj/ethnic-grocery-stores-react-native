import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const splitArrayInHalves = arr =>
  [ arr.slice(0, arr.length / 2), arr.slice(arr.length / 2) ];

export default class AddStoreTypes extends Component {
  render() {
    const styles = StyleSheet.create(this.props.styles);
    const { storeTypes, checkedTypes } = this.props;
    const splittedStoreTypes = splitArrayInHalves(storeTypes);

    return <View>
      <Text style={styles.addStoreText}>Type</Text>
      <View style={styles.addStoreTypesContainer}>
      {
        splittedStoreTypes.map(column =>
          <View key={Math.random()} style={styles.addStoreTypesColumn}>
          {
            column.map(type =>
              <TouchableOpacity key={type.id}
                style={
                  checkedTypes.includes(type.name) ?
                    styles.addStoreTypeChecked : styles.addStoreType
                } onPress={() => this.props.checkType(type.name)}>
                <Icon style={
                  checkedTypes.includes(type.name) ?
                    styles.addStoreTypeIconChecked : styles.addStoreTypeIcon
                } name={
                  checkedTypes.includes(type.name) ?
                  "ios-checkmark-circle-outline" : "ios-radio-button-off"
                } />
                <Text style={
                  checkedTypes.includes(type.name) ?
                    styles.addStoreTypeTextChecked : styles.addStoreTypeText
                }>{type.name}</Text>
              </TouchableOpacity>
            )
          }
          </View>
        )
      }
      </View>
    </View>;
  }
}
