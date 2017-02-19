import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Header';

const fields = [
  {
    state: 'titleMatch',
    caption: 'Found in title:',
  },
  {
    state: 'typeMatch',
    caption: 'Found in type:',
  },
  {
    state: 'addressMatch',
    caption: 'Found in address:',
  },
  {
    state: 'keywordsMatch',
    caption: 'Found in keywords:',
  },
];

export default class Search extends Component {
  state = {
    titleMatch: [],
    typeMatch: [],
    addressMatch: [],
    keywordsMatch: [],
  };

  clearResults = () => {
    this.setState({
      titleMatch: [],
      typeMatch: [],
      addressMatch: [],
      keywordsMatch: []
    });
  }

  handleTextChange = text => {
    if (!text) {
      this.clearResults();
      return;
    }

    const { stores } = this.props;
    const regexp = new RegExp(text, 'i');

    this.setState({
      titleMatch: stores.filter(store => store.title.match(regexp)),
      typeMatch: stores.filter(store => store.type.match(regexp)),
      addressMatch: stores.filter(store => store.address.match(regexp)),
      keywordsMatch: stores.filter(store => store.keywords.match(regexp)),
    });
  };

  render() {
    const styles = StyleSheet.create(this.props.styles);
    const { currentTheme, navigator } = this.props;

    return <View style={[ styles.flexOne, styles.primaryBackground ]}>
      <Header currentTheme={currentTheme} styles={this.props.styles}>
        <TouchableOpacity style={styles.headerIconContainer}
          onPress={() => navigator.pop()}>
          <Icon style={styles.headerIcon} name="ios-arrow-back"  />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          Search
        </Text>
        <View style={styles.iconPlaceholder} />
      </Header>

      <View style={styles.searchInputContainer}>
        <TextInput style={styles.searchInput} placeholder="Search.."
          placeholderTextColor="#999999" autoFocus={true}
          onChangeText={this.handleTextChange} />
      </View>
      <ScrollView>
      {
        fields.map(field => {
          const results = this.state[field.state];

          return results.length > 0 ?
            <View key={field.state}>
              <Text style={styles.searchHeader}>{field.caption}</Text>
              {
                results.map((store, i) =>
                  <TouchableOpacity key={store.id} style={
                    i === 0 ? [ styles.searchStore, styles.firstItem ] : styles.searchStore
                  } onPress={ () => this.props.onOpenStore(store, navigator) }>
                    <Text style={styles.searchStoreTitle}>
                      {store.title} <Text style={styles.searchStoreType}>
                        {store.type}
                      </Text>
                    </Text>
                    <Text style={styles.searchStoreAddress}>{store.address}</Text>
                  </TouchableOpacity>)
              }
            </View>
            : null
        })
      }
      </ScrollView>
    </View>
  }
}
