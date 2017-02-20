import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import getAddStoreStyles from '../../styles/AddStoreStyles';

const splitArrayInHalves = arr =>
  [ arr.slice(0, arr.length / 2), arr.slice(arr.length / 2) ];

export default class AddStoreTypes extends Component {
  render() {
    const { storeTypes, checkedTypes, currentTheme } = this.props;
    const addStoreStyles = getAddStoreStyles(currentTheme);

    const splittedStoreTypes = splitArrayInHalves(storeTypes);

    return <View>
      <Text style={addStoreStyles.text}>Type</Text>
      <View style={addStoreStyles.typesContainer}>
      {
        splittedStoreTypes.map(column =>
          <View key={Math.random()} style={addStoreStyles.typesColumn}>
          {
            column.map(type =>
              <TouchableOpacity key={type.id}
                style={
                  checkedTypes.includes(type.name) ?
                    addStoreStyles.typeChecked : addStoreStyles.type
                } onPress={() => this.props.checkType(type.name)}>
                <Icon style={
                  checkedTypes.includes(type.name) ?
                    addStoreStyles.typeIconChecked : addStoreStyles.typeIcon
                } name={
                  checkedTypes.includes(type.name) ?
                  "ios-checkmark-circle-outline" : "ios-radio-button-off"
                } />
                <Text style={
                  checkedTypes.includes(type.name) ?
                    addStoreStyles.typeTextChecked : addStoreStyles.typeText
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
