import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Navigator, AsyncStorage, AlertIOS } from 'react-native';
import App from './src/pages/App';
import About from './src/pages/About';
import Search from './src/pages/Search';
import Settings from './src/pages/Settings';
import Store from './src/pages/Store';
import AddStore from './src/pages/AddStore';
import getStyles from './src/styles/styles';
import {
  firebaseInitialize,
  loadStoreTypes,
  authListener,
  loadStores,
  firebasePush
} from './src/lib/firebaseLib';

firebaseInitialize();

export default class EthnicGroceryStores extends Component {
  state = {
    stores: [],
    storesToShow: [],
    storeTypes: [],
    currentStore: null,
    user: { email: '' },
    currentTheme: 'caviar',
    styles: {}
  };

  componentWillMount() {
    AsyncStorage.getItem('currentTheme', (err, result) => {
      if (!err && result)
        this.setState({ currentTheme: result, styles: getStyles(result) });
      else
        this.setState({ styles: getStyles(this.state.currentTheme) });
    });
  }

  componentDidMount() {
    loadStoreTypes(storeTypes => this.setState({ storeTypes }));
    authListener(user => this.setState({ user }));
    loadStores(stores => this.setState({ stores, storesToShow: stores }));
  }

  setTheme = theme => {
    this.setState({ currentTheme: theme });
    this.setState({ styles: getStyles(theme) });
    AsyncStorage.setItem('currentTheme', theme);
  };

  onSubmitAddStore = form => {
    firebasePush('newStores', form, err => {
      if (err) {
        AlertIOS.alert('Oh no!', 'Something went wrong. Please, try again.');

      } else {
        AlertIOS.alert(
          'Thank you!',
          'Your form was successfully submitted! We will check it up and add to our database as soon as possible.'
        );
      }
    });
  };

  renderScene = (route, navigator) => {
    const { currentTheme, styles, currentStore, storeTypes } = this.state;

    let sceneToRender;

    switch (route.title) {
      case 'Search':
        sceneToRender = <Search styles={styles} navigator={navigator}
          currentTheme={currentTheme} />;
        break;

      case 'About':
        sceneToRender = <About styles={styles} navigator={navigator}
          currentTheme={currentTheme} />;
        break;

      case 'Settings':
        sceneToRender = <Settings styles={styles} navigator={navigator}
          currentTheme={currentTheme} setTheme={ theme => {
            this.setTheme(theme);
            navigator.push({ title: 'Home' });
          }} />;
        break;

      case 'Store':
        sceneToRender = <Store styles={styles} navigator={navigator}
          store={currentStore} currentTheme={currentTheme} />;
        break;

      case 'AddStore':
        sceneToRender = <AddStore styles={styles} storeTypes={storeTypes}
          navigator={navigator} currentTheme={currentTheme}
          onSubmitAddStore={this.onSubmitAddStore} />;
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
