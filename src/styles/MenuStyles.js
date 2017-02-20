import themes from '../themes/themes';

export default function(theme) {
  const currentTheme = themes[theme];

  return ({
    listItem: {
      height: 75,
      flex: 1,
      flexDirection: 'row',
    },

    listItemIcon: {
      color: currentTheme.textLighter,
      marginLeft: 15,
      fontSize: 35,
      lineHeight: 75,
      width: 30,
      textAlign: 'center',
    },

    listItemText: {
      color: currentTheme.textLighter,
      marginLeft: 10,
      fontSize: 20,
      lineHeight: 75,
    },

    signIn: {
      backgroundColor: currentTheme.additionalDark,
      height: 75,
      flexDirection: 'row',
    },

    signInIcon: {
      color: currentTheme.primaryLight,
      marginLeft: 10,
      fontSize: 50,
      height: 60,
      width: 45,
      lineHeight: 75,
    },

    signInText: {
      color: currentTheme.primaryLight,
      backgroundColor: 'transparent',
      marginLeft: 10,
      lineHeight: 75,
      fontSize: 20,
    },

    userCover: {
      height: 110,
    },

    userContainer: {
      height: 110,
      backgroundColor: 'rgba(0,0,0,0.3)',
    },

    userImage: {
      height: 60,
      width: 60,
      borderRadius: 30,
      marginLeft: 10,
      marginTop: 10
    },

    userName: {
      color: 'white',
      backgroundColor: 'transparent',
      fontSize: 20,
      marginLeft: 10,
      marginTop: 5,
      textShadowColor: 'black',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
    },
  });
};
