import Firestack from 'react-native-firestack';

const firestack = new Firestack({
  apiKey: "AIzaSyDyRukiPIej168d6elewuZpF7VR4P0ueWU",
  databaseURL: "https://ethnic-grocery-stores.firebaseio.com",
});

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

const pushStoreToFirebase = form =>
  firestack.database.ref('newStores').push(form);

const loadFromJson = () => {
  return fetch('https://raw.githubusercontent.com/marizamj/ethnic-grocery-stores-database/master/database.json')
  .then(response => response.json())
  .then(json => ({
      stores: toArrayStores(json.stores),
      storeTypes: toArrayTypes(json.storeTypes)
    })
  )
  .catch(error => console.log(error));
};

export {
  loadStoreTypes,
  loadStores,
  pushStoreToFirebase,
  loadFromJson
};
