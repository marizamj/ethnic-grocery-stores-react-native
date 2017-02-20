import themes from '../themes/themes';

export default function(theme) {
  const currentTheme = themes[theme];

  return ({
    container: {
      backgroundColor: currentTheme.primaryDark,
      height: 70,
      paddingTop: 23,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: currentTheme.borders,
      borderBottomWidth: currentTheme.barStyle === 'dark-content' ? 1  : 0,
    },

    iconContainer: {
      marginTop: 8,
      width: 45,
    },

    icon: {
      color: currentTheme.primaryLight,
      fontSize: 30,
      textAlign: 'center',
    },

    dropdownIcon: {
      fontSize: 15,
      color: currentTheme.primaryLight,
    },

    text: {
      color: currentTheme.primaryLight,
      fontSize: 20,
      textAlign: 'center',
      marginTop: 10,
    },

    iconPlaceholder: {
      width: 45,
    },
  });
};
