import React, { Component } from 'react';
import { StyleSheet, Text, Linking, TouchableOpacity } from 'react-native';

export default class OpenLink extends Component {
  static propTypes = {
    url: React.PropTypes.string,
  };

  onUrlPress = () => {
    const url = this.props.prefix ?
      this.props.prefix + this.props.url
      :
      this.props.url;

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
  };

  render() {
    const styles = StyleSheet.create(this.props.styles);

    return this.props.inline ?
      <Text onPress={this.onUrlPress}>
        {this.props.children}
      </Text>
      :
      <TouchableOpacity onPress={this.onUrlPress}>
      {
        this.props.children ?
          this.props.children
          :
          <Text style={styles.storeFieldText}>
            { this.props.url }
          </Text>
      }
      </TouchableOpacity>
  }
};
