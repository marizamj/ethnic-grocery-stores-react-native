import themes from '../themes/themes';

export default function(theme) {
  const currentTheme = themes[theme];

  return ({
    map: {
      height: 150,
    },

    type: {
      color: currentTheme.primaryLight,
      backgroundColor: currentTheme.additionalLight,
      fontSize: 20,
      textAlign: 'center',
      padding: 5,
    },

    quickContacts: {
      backgroundColor: currentTheme.additionalDark,
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    quickContactsIcon : {
      color: currentTheme.primaryLight,
      fontSize: 40,
      lineHeight: 60,
    },

    fieldTitle: {
      color: currentTheme.additionalDark,
      fontSize: 18,
      padding: 10,
    },

    fieldText: {
      color: currentTheme.textDarker,
      fontSize: 22,
      padding: 5,
      paddingLeft: 40,
    },

    hours: {
      marginBottom: 20,
    },

    hoursDay: {
      flexDirection: 'row',
      paddingLeft: 40,
    },

    hoursDayTitle: {
      color: currentTheme.textDarker,
      fontSize: 20,
      flex: 1,
    },

    hoursDayTime: {
      color: currentTheme.textDarker,
      fontSize: 22,
      flex: 4,
    },
  });
};
