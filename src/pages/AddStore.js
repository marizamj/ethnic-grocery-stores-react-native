import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Header';
import AddStoreTypes from './AddStore/AddStoreTypes';

const fields = [
  { title: 'Title', placeholder: 'title (required)', keyboardType: 'default' },
  { title: 'Address', placeholder: 'address (required)', keyboardType: 'default' },
  { title: 'Type', placeholder: '', keyboardType: 'default' },
  { title: 'Other type', placeholder: 'other type', keyboardType: 'default' },
  { title: 'Description', placeholder: 'description', keyboardType: 'default' },
  { title: 'Telephone', placeholder: 'telephone', keyboardType: 'numeric' },
  { title: 'Email', placeholder: 'info@coolstore.com', keyboardType: 'email-address' },
  { title: 'Website', placeholder: 'www.coolstore.com', keyboardType: 'url' },
  { title: 'Keywords', placeholder: 'curry, gyoza, whatever', keyboardType: 'default' },
];

export default class AddStore extends Component {
  state = {
    checkedTypes: [],
    message: '',
  };

  form = {};

  checkType = type => {
    const { checkedTypes } = this.state;
    if (checkedTypes.includes(type))
      this.setState({ checkedTypes: checkedTypes.filter(el => el !== type) });
    else
      this.setState({ checkedTypes: checkedTypes.concat(type) });
  };

  handleSubmit = () => {
    const form = this.form;
    form.type = this.state.checkedTypes;

    const requiredFields =
      form.title && form.title.trim() &&
      form.address && form.address.trim() &&
      (form.type.length > 0 || form['other type'] && form['other type'].trim());

    if (requiredFields) {
      this.props.onSubmitAddStore();

    } else {
      this.setState({
        message: 'At least title, address and type should be filled. Please, try again.'
      });

      this.ScrollView.scrollTo({ y: 0 });
    }
  };

  render() {
    const styles = StyleSheet.create(this.props.styles);
    const { currentTheme, navigator, storeTypes } = this.props;

    return <View style={[ styles.flexOne, styles.primaryBackground ]}>
      <Header currentTheme={currentTheme} styles={this.props.styles}>
        <Icon style={styles.headerIcon}
          name="ios-arrow-back" onPress={() => navigator.pop()} />
        <Text style={styles.headerText}>
          Add new store
        </Text>
        <View style={styles.iconPlaceholder} />
      </Header>

      <ScrollView ref={ref => this.ScrollView = ref}>
      {
        this.state.message ?
          <Text style={styles.addStoreMessage}>{this.state.message}</Text>
          : null
      }

      {
        fields.map(field => {
          let elementToRender;

          switch (field.title) {
            case 'Type':
              elementToRender = <AddStoreTypes key={field.title}
                checkType={this.checkType} checkedTypes={this.state.checkedTypes}
                storeTypes={storeTypes} styles={this.props.styles} />
              break;

            default:
              elementToRender = <View style={styles.addStoreField} key={field.title}
                ref={ref => this[field.title] = ref}>
                <Text style={styles.addStoreText}>{field.title}</Text>
                <TextInput style={styles.addStoreInput}
                  placeholder={field.placeholder} placeholderTextColor="#999999"
                  keyboardType={field.keyboardType} returnKeyType='done'
                  keyboardAppearance='dark'
                  onChangeText={text => this.form[field.title.toLowerCase()] = text}
                  onFocus={ () => {
                    this[field.title].measure( (fx, fy, w, h, px, py) => {
                      this.ScrollView.scrollTo({ y: fy });
                    });
                  }} />
              </View>;
          }

          return elementToRender;
        })
      }

        <TouchableOpacity style={[styles.btn, styles.addStoreSubmit]}
          onPress={this.handleSubmit}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  }
}
