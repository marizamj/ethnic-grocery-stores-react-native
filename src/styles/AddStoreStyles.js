import themes from '../themes/themes';

export default function(theme) {
  const currentTheme = themes[theme];

  return ({
    message: {
      marginHorizontal: 20,
      color: currentTheme.additionalLight,
      borderColor: currentTheme.additionalLight,
      borderWidth: 1,
      borderRadius: 5,
      fontSize: 18,
      textAlign: 'center',
      marginTop: 10,
      padding: 10,
    },

    text: {
      color: currentTheme.textLighter,
      fontSize: 20,
      marginHorizontal: 20,
      marginTop: 10,
    },

    input: {
      borderColor: currentTheme.textLighter,
      color: currentTheme.textDarker,
      borderWidth: 1,
      fontSize: 20,
      height: 40,
      marginTop: 10,
      marginHorizontal: 20,
      paddingHorizontal: 10,
    },

    typesContainer: {
      marginTop: 10,
      flexDirection: 'row',
      marginLeft: 10,
      marginRight: 20,
    },

    typesColumn: {
      flex: 1,
      marginLeft: 10,
    },

    type: {
      borderColor: currentTheme.primaryDark,
      borderWidth: 1,
      borderRadius: 20,
      flexDirection: 'row',
      height: 36,
      marginVertical: 5,
    },

    typeChecked: {
      backgroundColor: currentTheme.primaryDark,
      borderColor: currentTheme.primaryDark,
      borderWidth: 1,
      borderRadius: 20,
      flexDirection: 'row',
      height: 36,
      marginVertical: 5,
    },

    typeIcon: {
      color: currentTheme.primaryDark,
      borderRadius: 20,
      fontSize: 28,
      height: 26,
      marginVertical: 3,
      marginHorizontal: 7,
    },

    typeIconChecked: {
      color: currentTheme.primaryLight,
      borderRadius: 20,
      fontSize: 28,
      height: 26,
      marginVertical: 3,
      marginHorizontal: 7,
    },

    typeText: {
      color: currentTheme.textDarker,
      fontSize: 18,
      paddingTop: 5,
    },

    typeTextChecked: {
      color: currentTheme.primaryLight,
      fontSize: 18,
      paddingTop: 5,
    },

    submit: {
      marginVertical: 20,
    },
  });
};
