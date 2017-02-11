import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import themes from './styles/themes';
import pictures from './styles/pictures';

export default class Search extends Component {
  render() {
    const styles = StyleSheet.create(this.props.styles);

    return <View style={[ styles.flexOne, styles.primaryBackground ]}>
      <Header currentTheme={this.props.currentTheme} styles={this.props.styles}>
        <Icon style={styles.headerIcon}
          name="ios-arrow-back" onPress={() => this.props.navigator.pop()} />
        <Text style={styles.headerText}>
          Settings
        </Text>
        <View style={styles.iconPlaceholder} />
      </Header>

      <ScrollView>
        <Text style={styles.settingsTitle}>Pick a theme</Text>
        {
          Object.keys(themes).map((key, i) => <TouchableHighlight key={key}
            style={styles.settingsItem} onPress={() => {
              this.props.setTheme(key);
            }}>
            <Image style={styles.settingsItemImage} source={pictures[key]}>
              <View style={[
                styles.settingsItemTextContainer,
                { backgroundColor: themes[key].primaryDark }
              ]}>
                <Text style={[
                  styles.settingsItemText,
                  { color: themes[key].primaryLight }
                ]}>{themes[key].title}</Text>
              </View>
            </Image>
          </TouchableHighlight>)
        }
      </ScrollView>
    </View>
  }
}
