import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../globalComponents/Header';
import getStyles from '../styles/styles';
import getSearchStyles from '../styles/SearchStyles';
import getHeaderStyles from '../styles/HeaderStyles';

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
    const { currentTheme, navigator } = this.props;
    const styles = getStyles(currentTheme);
    const searchStyles = getSearchStyles(currentTheme);
    const headerStyles = getHeaderStyles(currentTheme);

    return <View style={styles.pageContainer}>
      <Header currentTheme={currentTheme}>
        <TouchableOpacity style={headerStyles.iconContainer}
          onPress={() => navigator.pop()}>
          <Icon style={headerStyles.icon} name="ios-arrow-back"  />
        </TouchableOpacity>
        <Text style={headerStyles.text}>
          Search
        </Text>
        <View style={headerStyles.iconPlaceholder} />
      </Header>

      <View style={searchStyles.searchInputContainer}>
        <TextInput style={searchStyles.searchInput} placeholder="Search.."
          placeholderTextColor="#999999" autoFocus={true}
          onChangeText={this.handleTextChange} />
      </View>
      <ScrollView>
      {
        fields.map(field => {
          const results = this.state[field.state];

          return results.length > 0 ?
            <View key={field.state}>
              <Text style={searchStyles.searchHeader}>{field.caption}</Text>
              {
                results.map((store, i) =>
                  <TouchableOpacity key={store.id} style={
                    i === 0 ?
                      [ searchStyles.searchStore, searchStyles.firstItem ]
                      : searchStyles.searchStore
                  } onPress={ () => this.props.onOpenStore(store, navigator) }>
                    <Text style={searchStyles.searchStoreTitle}>
                      {store.title} <Text style={searchStyles.searchStoreType}>
                        {store.type}
                      </Text>
                    </Text>
                    <Text style={searchStyles.searchStoreAddress}>{store.address}</Text>
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
