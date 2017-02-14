const firebase = require('firebase');

const firebaseInitialize = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyDyRukiPIej168d6elewuZpF7VR4P0ueWU",
    authDomain: "ethnic-grocery-stores.firebaseapp.com",
    databaseURL: "https://ethnic-grocery-stores.firebaseio.com",
    storageBucket: "ethnic-grocery-stores.appspot.com",
    messagingSenderId: "131961135840"
  });
};

const toArrayStores = obj =>
  Object.keys(obj || {}).map(id => ({ id, ...obj[id] }));

const toArrayTypes = obj =>
  Object.keys(obj || {})
  .map(id => ({ id, name: obj[id] }))
  .sort((a, b) => +(a.name > b.name) || +(a.name === b.name) - 1);

const loadStoreTypes = f => {
  firebase.database().ref('storeTypes').on('value', snapshot => {
    f(toArrayTypes(snapshot.val()));
  });
};

const loadStores = f => {
  firebase.database().ref('stores').on('value', snapshot => {
    f(toArrayStores(snapshot.val()));
  });
};

const authListener = f => {
  firebase.auth().onAuthStateChanged(user => f(Object.assign({ email: '' }, user)));
};

export { firebaseInitialize, loadStoreTypes, authListener, loadStores };
