import themes from './themes';

export default function getStyles(theme) {
  const currentTheme = themes[theme];

  return ({
    flexOne: {
      flex: 1,
    },

    flexRow: {
      flexDirection: 'row'
    },

    primaryBackground: {
      backgroundColor: currentTheme.primaryLight,
    },

    header: {
      backgroundColor: currentTheme.primaryDark,
      height: 70,
      paddingTop: 23,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    headerIcon: {
      color: currentTheme.primaryLight,
      fontSize: 30,
      marginTop: 8,
      width: 45,
      textAlign: 'center'
    },

    headerDropdownIcon: {
      fontSize: 15,
      color: currentTheme.primaryLight,
    },

    headerText: {
      color: currentTheme.primaryLight,
      // fontFamily: 'Roboto-Medium',
      fontSize: 20,
      textAlign: 'center',
      marginTop: 10,
    },

    iconPlaceholder: {
      width: 45
    },

    menu: {
      backgroundColor: currentTheme.primaryLight,
      flex: 1,
      shadowColor: 'slategrey',
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 200,
      shadowOpacity: 1
    },

    signIn: {
      backgroundColor: currentTheme.additionalDark,
      height: 75,
      flexDirection: 'row'
    },

    signInIcon: {
      color: currentTheme.primaryLight,
      marginLeft: 10,
      fontSize: 50,
      height: 60,
      width: 45,
      lineHeight: 75
    },

    signInText: {
      color: currentTheme.primaryLight,
      marginLeft: 10,
      lineHeight: 75,
      fontSize: 20,
    },

    user: {
      height: 75
    },

    menuListItem: {
      height: 75,
    },

    menuListItemIcon: {
      color: currentTheme.textLighter,
      marginLeft: 15,
      fontSize: 35,
      lineHeight: 75,
      width: 30,
      textAlign: 'center',
    },

    menuListItemText: {
      color: currentTheme.textLighter,
      marginLeft: 10,
      fontSize: 20,
      lineHeight: 75,
    },

    search: {
      borderColor: currentTheme.borders,
      height: 50,
      marginVertical: 15,
      marginHorizontal: 20,
      paddingHorizontal: 20,
      fontSize: 20,
      borderStyle: 'solid',
      borderWidth: 1
    },

    searchResultsItem: {
      borderColor: currentTheme.borders,
      height: 50,
      marginHorizontal: 20,
      borderStyle: 'solid',
      borderTopColor: 'transparent',
      borderWidth: 1
    },

    firstItem: {
      borderTopColor: currentTheme.borders
    },

    storeMap: {
      height: 150
    },

    storeType: {
      color: currentTheme.primaryLight,
      backgroundColor: currentTheme.additionalLight,
      fontSize: 20,
      textAlign: 'center',
      padding: 5
    },

    storeQuickContacts: {
      backgroundColor: currentTheme.additionalDark,
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },

    storeQuickContactsIcon : {
      color: currentTheme.primaryLight,
      fontSize: 40,
      lineHeight: 60,
    },

    storeFieldTitle: {
      color: currentTheme.additionalDark,
      fontSize: 18,
      padding: 10
    },

    storeFieldText: {
      color: currentTheme.textDarker,
      fontSize: 22,
      padding: 5,
      paddingLeft: 40
    },

    aboutIcons: {
      color: currentTheme.textLighter,
      fontSize: 40,
      marginHorizontal: 10
    },

    settingsTitle: {
      color: currentTheme.primaryLight,
      backgroundColor: currentTheme.additionalLight,
      fontSize: 20,
      textAlign: 'center',
      padding: 5
    },

    settingsItem: {
      height: 125,
      flexDirection: 'row'
    },

    settingsItemText: {
      fontSize: 25,
      paddingHorizontal: 10,
      fontWeight: '300',
      paddingVertical: 7,
    },

    settingsItemTextContainer: {
      height: 45,
      marginTop: 80,
      width: 270
    },

    settingsItemImage: {
      height: 200,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },

    p: {
      color: currentTheme.textDarker,
      fontWeight: '300',
      fontSize: 20,
      textAlign: 'center',
      marginTop: 15,
      marginHorizontal: 15,
    }
  });
}
