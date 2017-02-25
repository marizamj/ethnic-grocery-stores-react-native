import React, { Component } from 'react';
import { AppRegistry, Navigator, AsyncStorage, AlertIOS } from 'react-native';
import App from './src/pages/App/index';
import About from './src/pages/About';
import Search from './src/pages/Search';
import Themes from './src/pages/Themes';
import Store from './src/pages/Store/index';
import AddStore from './src/pages/AddStore/index';
import { pushStoreToFirebase, loadFromJson } from './src/lib/firebaseLib';
import { signInWithGoogle, signOut } from './src/lib/OAuthLib';
import { amsterdamRegion, checkPosition } from './src/lib/geolocationLib';

export default class EthnicGroceryStores extends Component {
  state = {
    stores: [],
    storesToShow: [],
    storeTypes: [],
    currentStore: null,
    user: null,
    currentTheme: 'caviar',
    filter: 'All stores',
    currentPosition: null,
    positionChecked: false,
    initialRegion: amsterdamRegion,
  };

  componentWillMount() {
    AsyncStorage.multiGet(
      [ 'currentTheme', 'user' ],
      (err, [ [ k1, currentTheme ], [ k2, user ] ]) => {
        if (err) {
          console.log(err);
          return;
        }

        if (user) {
          this.setState({ user: JSON.parse(user) });
        }

        if (currentTheme) {
          this.setState({ currentTheme });
        }
      }
    );

    navigator.geolocation.watchPosition(
      position => {
        this.setState({ currentPosition: position.coords }, () => {
          if (!this.state.positionChecked) {
            checkPosition(
              this.state.currentPosition,
              region => {
                this.setState({ initialRegion: region });
              }
            );
            this.setState({ positionChecked: true });
          }
        });
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

    let sceneToRender;

    switch (route.title) {
      case 'Search':
        sceneToRender = <Search navigator={navigator}
          currentTheme={currentTheme} stores={stores}
          onOpenStore={this.onOpenStore} />;
        break;

      case 'About':
        sceneToRender = <About navigator={navigator}
          currentTheme={currentTheme} />;
        break;

      case 'Themes':
        sceneToRender = <Themes navigator={navigator}
          currentTheme={currentTheme} setTheme={ theme => {
            this.setTheme(theme);
            navigator.push({ title: 'Home' });
          }} />;
        break;

      case 'Store':
        sceneToRender = <Store navigator={navigator}
          store={currentStore} currentTheme={currentTheme} />;
        break;

      case 'AddStore':
        sceneToRender = <AddStore storeTypes={storeTypes}
          navigator={navigator} currentTheme={currentTheme}
          onSubmitAddStore={this.onSubmitAddStore} />;
        break;

      case 'Home':
      default:
        sceneToRender = <App {...this.state} navigator={navigator}
          setInitialRegion={this.setInitialRegion}
          onPositionChecked={this.onPositionChecked}
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
