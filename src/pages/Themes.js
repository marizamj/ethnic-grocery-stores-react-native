import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../globalComponents/Header';
import themes from '../themes/themes';
import pictures from '../themes/pictures';
import getStyles from '../styles/styles';
import getHeaderStyles from '../styles/HeaderStyles';
import getThemesStyles from '../styles/ThemesStyles';

export default class Themes extends Component {
  render() {
    const { currentTheme, navigator } = this.props;
    const styles = getStyles(currentTheme);
    const headerStyles = getHeaderStyles(currentTheme);
    const settingsStyles = getThemesStyles(currentTheme);

    return <View style={styles.pageContainer}>
      <Header currentTheme={currentTheme}>
        <TouchableOpacity style={headerStyles.iconContainer}
          onPress={() => navigator.pop()}>
          <Icon style={headerStyles.icon} name="ios-arrow-back"  />
        </TouchableOpacity>
        <Text style={headerStyles.text}>
          Themes
        </Text>
        <View style={headerStyles.iconPlaceholder} />
      </Header>

      <ScrollView>
        <Text style={settingsStyles.title}>Pick a theme</Text>
        {
          Object.keys(themes).map((key, i) => <TouchableOpacity key={key}
            activeOpacity={1} style={settingsStyles.item}
            onPress={() => { this.props.setTheme(key) }}>
            <Image style={settingsStyles.itemImage} source={pictures[key]}>
              <View style={[
                settingsStyles.itemTextContainer,
                { backgroundColor: themes[key].primaryDark }
              ]}>
                <Text style={[
                  settingsStyles.itemText,
                  { color: themes[key].primaryLight }
                ]}>{themes[key].title}</Text>
              </View>
            </Image>
          </TouchableOpacity>)
        }
      </ScrollView>
    </View>
  }
}
