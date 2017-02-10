import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Navigator } from 'react-native';
import App from './src/App';
import About from './src/About';
import Search from './src/Search';
import Store from './src/Store';
import getStyles from './src/styles';

import firebase from 'firebase';
import { loadStoreTypes, authListener, loadStores } from './src/helpers/firebaseLoaders';

firebase.initializeApp({
  apiKey: "AIzaSyDyRukiPIej168d6elewuZpF7VR4P0ueWU",
  authDomain: "ethnic-grocery-stores.firebaseapp.com",
  databaseURL: "https://ethnic-grocery-stores.firebaseio.com",
  storageBucket: "ethnic-grocery-stores.appspot.com",
  messagingSenderId: "131961135840"
});

export default class EthnicGroceryStores extends Component {
  state = {
    stores: [],
    storesToShow: [],
    storeTypes: [],
    currentStore: null,
    user: { email: '' },
    currentTheme: 'lavenderField',
    styles: {}
  };

  componentWillMount() {
    this.setState({ styles: getStyles(this.state.currentTheme) });
  }

  componentDidMount() {
    loadStoreTypes(storeTypes => this.setState({ storeTypes }));
    authListener(user => this.setState({ user }));
    loadStores(stores => this.setState({ stores, storesToShow: stores }));
  }

  renderScene = (route, navigator) => {
    let sceneToRender;

    switch (route.title) {
      case 'Search':
        sceneToRender = <Search styles={this.state.styles} navigator={navigator} />;
        break;

      case 'About':
        sceneToRender = <About styles={this.state.styles} navigator={navigator} />;
        break;

      case 'Store':
        sceneToRender = <Store styles={this.state.styles} navigator={navigator}
          store={this.state.currentStore} currentTheme={this.state.currentTheme} />;
        break;

      default:
        sceneToRender = <App {...this.state} navigator={navigator}
          onOpenStore={ store => {
            this.setState({ currentStore: store });
            navigator.push({ title: 'Store' });
          }} />;
    }

    return sceneToRender;
  };

  render() {
    return (
      <Navigator initialRoute={{ title: 'Home' }}
        renderScene={this.renderScene} />
    );
  }
}

AppRegistry.registerComponent('EthnicGroceryStores', () => EthnicGroceryStores);
