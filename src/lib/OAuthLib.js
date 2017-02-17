import OAuthManager from 'react-native-oauth';

const manager = new OAuthManager('EthnicGroceryStores');

manager.configure({
  google: {
    callback_url: `com.googleusercontent.apps.131961135840-lv5nddns60bnfnpp8q2h1iv473pb35b7:/google`,
    client_id: '131961135840-lv5nddns60bnfnpp8q2h1iv473pb35b7.apps.googleusercontent.com',
  }
});

const signInWithGoogle = () => {
  return manager.authorize('google', {
    scopes: 'https://www.googleapis.com/auth/plus.login+' +
      'https://www.googleapis.com/auth/userinfo.profile+' +
      'https://www.googleapis.com/auth/userinfo.email+'
  }).then(response => {
    return manager.makeRequest('google', 'https://www.googleapis.com/plus/v1/people/me')
  }).then(resp => {
    const user = resp.data;
    const imageUrl = user.image.url.match(/\?sz=\d+/) ?
      user.image.url.replace(/\?sz=\d+/, '') : user.image.url;

    return {
      displayName: user.displayName,
      firstName: user.name.givenName,
      familyName: user.name.familyName,
      emails: user.emails,
      gender: user.gender,
      coverUrl: user.cover.coverPhoto.url,
      imageUrl,
    };
  }).catch(error => console.log(error));
};

const signOut = () => {
  manager.deauthorize('google');
};

export {
  signInWithGoogle,
  signOut,
};
