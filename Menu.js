import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

import stylesObj from './styles';

export default class Menu extends Component {
  componentDidMount() {
    console.log(this.props.onClose);
  }

  render() {
    return <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={styles.menu}>
        <ScrollView style={styles.menuList}>
            <TouchableHighlight underlayColor="#e6eefd" style={styles.menuListItem} onPress={() => {  }}>
              <Text style={styles.menuListItemText}>About</Text>
            </TouchableHighlight>
        </ScrollView>
      </View>
      <TouchableWithoutFeedback onPress={() => this.props.onClose()}>
        <View style={styles.flexOne} />
      </TouchableWithoutFeedback>
    </View>
  }
}

const styles = StyleSheet.create(stylesObj);
