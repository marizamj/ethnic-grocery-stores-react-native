import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Navigator, AsyncStorage, AlertIOS } from 'react-native';
import App from './src/pages/App';
import About from './src/pages/About';
import Search from './src/pages/Search';
import Settings from './src/pages/Settings';
import Store from './src/pages/Store';
import AddStore from './src/pages/AddStore';
import getStyles from './src/styles/styles';
import { pushStoreToFirebase, loadFromJson } from './src/lib/firebaseLib';
import { signInWithGoogle, signOut } from './src/lib/OAuthLib';

export default class EthnicGroceryStores extends Component {
  state = {
    stores: [],
    storesToShow: [],
    storeTypes: [],
    currentStore: null,
    user: null,
    currentTheme: 'caviar',
    filter: 'All stores',
  };

  componentWillMount() {
    AsyncStorage.multiGet(
      [ 'currentTheme', 'user' ],
      (err, [ [ k1, currentTheme ], [ k2, user ] ]) => {
        if (err) return;

        if (user) {
          this.setState({ user: JSON.parse(user) });
        }

        if (currentTheme) {
          this.setState({ currentTheme });
        }
      }
    );
  }

  componentDidMount() {
    loadFromJson()
    .then(data => {
      const { stores, storeTypes } = data;
      this.setState({ stores, storeTypes, storesToShow: stores });
    });
  }

  setTheme = theme => {
    this.setState({ currentTheme: theme });
    AsyncStorage.setItem('currentTheme', theme);
  };

  changeFilter = filter =>  {
    const filteredStoresToShow = filter !== 'All stores' ?
      this.state.stores.filter(store => store.type.match(filter))
      : this.state.stores;

    this.setState({ filter, storesToShow: filteredStoresToShow });
  };

  handleSignIn = () => {
    signInWithGoogle().then(user => {
      this.setState({ user });
      AsyncStorage.setItem('user', JSON.stringify(user));
    });
  };

  onOpenStore = (store, navigator) => {
    this.setState({ currentStore: store });
    navigator.push({ title: 'Store' });
  };

  handleSignOut = () => {
    signOut();
    this.setState({ user: null });
    AsyncStorage.setItem('user', JSON.stringify(null));
  };

  onSubmitAddStore = form => {
    const { user } = this.state;

    pushStoreToFirebase({
      ...form,
      senderName: user.displayName,
      senderEmail: user.emails.map(email => email.value).join(', ')
    })
    .then(response => {
      AlertIOS.alert(
        'Thank you!',
        'Your form was successfully submitted! We will check it up and add to our database as soon as possible.'
      );
    })
    .catch(error => {
      AlertIOS.alert('Oh no!', 'Something went wrong. Please, try again.');
      console.log(error);
    });
  };

  renderScene = (route, navigator) => {
    const { currentTheme, currentStore, storeTypes, stores } = this.state;
    const styles = getStyles(currentTheme);

    let sceneToRender;

    switch (route.title) {
      case 'Search':
        sceneToRender = <Search styles={styles} navigator={navigator}
          currentTheme={currentTheme} stores={stores}
          onOpenStore={this.onOpenStore} />;
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
        sceneToRender = <App {...this.state} navigator={navigator} styles={styles}
          onOpenStore={this.onOpenStore}
          onChangeFilter={this.changeFilter}
          onSignIn={this.handleSignIn}
          onSignOut={this.handleSignOut} />;
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
