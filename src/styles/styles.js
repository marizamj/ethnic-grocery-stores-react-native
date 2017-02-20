import themes from '../themes/themes';

export default function getStyles(theme) {
  const currentTheme = themes[theme];

  return ({
    pageContainer: {
      flex: 1,
      backgroundColor: currentTheme.primaryLight,
    },

    menu: {
      backgroundColor: currentTheme.primaryLight,
      position: 'absolute',
      width: 250,
      top: 0,
      bottom: 0,
    },

    menuShadow: {
      backgroundColor: '#000000',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },

    filters: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
    },

    filtersHeader: {
      height: 50,
      backgroundColor: currentTheme.primaryDark,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      borderColor: currentTheme.borders,
      borderWidth: currentTheme.barStyle === 'dark-content' ? 1  : 0,
    },

    filtersPickerText: {
      color: currentTheme.primaryDark,
    },

    filtersHeaderBtn: {
      color: currentTheme.primaryLight,
      lineHeight: 50,
      height: 45,
      fontSize: 18,
    },

    aboutIcons: {
      color: currentTheme.links,
      fontSize: 40,
      marginHorizontal: 10,
      marginBottom: 20,
    },

    btn: {
      backgroundColor: currentTheme.primaryDark,
      height: 50,
      marginHorizontal: 40,
      borderRadius: 5,
      marginVertical: 10,
    },

    btnText: {
      color: currentTheme.primaryLight,
      fontSize: 20,
      textAlign: 'center',
      marginVertical: 13,
    },

    p: {
      color: currentTheme.textDarker,
      fontWeight: '300',
      fontSize: 20,
      textAlign: 'center',
      marginTop: 15,
      marginHorizontal: 15,
    },

    linkText: {
      color: currentTheme.textDarker,
      fontSize: 22,
      padding: 5,
      paddingLeft: 40,
    },

    pLink: {
      color: currentTheme.links,
      textDecorationLine: 'underline',
    },
  });
}
