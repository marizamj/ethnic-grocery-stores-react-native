import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import App from './App';
import About from './About';

import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyDyRukiPIej168d6elewuZpF7VR4P0ueWU",
  authDomain: "ethnic-grocery-stores.firebaseapp.com",
  databaseURL: "https://ethnic-grocery-stores.firebaseio.com",
  storageBucket: "ethnic-grocery-stores.appspot.com",
  messagingSenderId: "131961135840"
});

export default class EthnicGroceryStores extends Component {
  renderScene(route, navigator) {
    let sceneToRender;

    switch (route.title) {
      // case 'Start':
      //   sceneToRender = <About navigator={navigator} />;
      //   break;

      case 'About':
        sceneToRender = <About navigator={navigator} />;
        break;

      default:
        sceneToRender = <App navigator={navigator} />;
    }

    return sceneToRender;
  }

  render() {
    return (
      <Navigator initialRoute={{ title: 'Home' }}
        renderScene={this.renderScene} />
    );
  }
}

AppRegistry.registerComponent('EthnicGroceryStores', () => EthnicGroceryStores);
