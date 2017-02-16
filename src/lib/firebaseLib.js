import Firestack from 'react-native-firestack';

const firestack = new Firestack({
  apiKey: "AIzaSyDyRukiPIej168d6elewuZpF7VR4P0ueWU",
  databaseURL: "https://ethnic-grocery-stores.firebaseio.com",
});

// const firebaseInitialize = () => {
//   firebase.initializeApp({
//     apiKey: "AIzaSyDyRukiPIej168d6elewuZpF7VR4P0ueWU",
//     authDomain: "ethnic-grocery-stores.firebaseapp.com",
//     databaseURL: "https://ethnic-grocery-stores.firebaseio.com",
//     storageBucket: "ethnic-grocery-stores.appspot.com",
//     messagingSenderId: "131961135840"
//   });
// };

const toArrayStores = obj =>
  Object.keys(obj || {}).map(id => ({ id, ...obj[id] }));

const toArrayTypes = obj =>
  Object.keys(obj || {})
  .map(id => ({ id, name: obj[id] }))
  .sort((a, b) => +(a.name > b.name) || +(a.name === b.name) - 1);

const loadStoreTypes = f => {
  firestack.database.ref('storeTypes').on('value', snapshot => {
    f(toArrayTypes(snapshot.val()));
  });
};

const loadStores = f => {
  firestack.database.ref('stores').on('value', snapshot => {
    f(toArrayStores(snapshot.val()));
  });
};

// const signInWithGoogle = f => {
//
// };

// const authListener = f => {
//   firestack.auth().onAuthStateChanged(user => f(Object.assign({ email: '' }, user)));
// };

// const firebasePush = (ref, form, callback) => {
//   firebase.database().ref(ref).push(form, callback);
// };

export {
  // firebaseInitialize,
  loadStoreTypes,
  // authListener,
  loadStores,
  // signInWithGoogle
  // firebasePush
};
