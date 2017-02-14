import themes from './themes';

export default function getStyles(theme) {
  const currentTheme = themes[theme];

  return ({
    flexOne: {
      flex: 1,
    },

    flexRow: {
      flexDirection: 'row',
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
      borderColor: '#cccccc',
      borderBottomWidth: currentTheme.barStyle === 'dark-content' ? 1  : 0,
    },

    headerIcon: {
      color: currentTheme.primaryLight,
      fontSize: 30,
      marginTop: 8,
      width: 45,
      textAlign: 'center',
    },

    headerDropdownIcon: {
      fontSize: 15,
      color: currentTheme.primaryLight,
    },

    headerText: {
      color: currentTheme.primaryLight,
      fontSize: 20,
      textAlign: 'center',
      marginTop: 10,
    },

    iconPlaceholder: {
      width: 45,
    },

    menu: {
      backgroundColor: currentTheme.primaryLight,
      position: 'absolute',
      top: 0,
      bottom: 0,
      shadowColor: 'slategrey',
      shadowOffset: { width: 0, height: 150 },
      shadowRadius: 100,
      shadowOpacity: 1,
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

    menuSignIn: {
      backgroundColor: currentTheme.additionalDark,
      height: 75,
      flexDirection: 'row',
    },

    menuSignInIcon: {
      color: currentTheme.primaryLight,
      marginLeft: 10,
      fontSize: 50,
      height: 60,
      width: 45,
      lineHeight: 75,
    },

    menuSignInText: {
      color: currentTheme.primaryLight,
      marginLeft: 10,
      lineHeight: 75,
      fontSize: 20,
    },

    user: {
      // backgroundColor: currentTheme.additionalDark,
      height: 75,
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
      borderColor: '#cccccc',
      borderWidth: currentTheme.barStyle === 'dark-content' ? 1  : 0,
    },

    filtersPickerText: {
      color: currentTheme.primaryDark,
    },

    filtersHeaderBtn: {
      color: currentTheme.primaryLight,
      lineHeight: 50,
      fontSize: 18,
    },

    search: {
      borderColor: currentTheme.borders,
      height: 50,
      marginVertical: 15,
      marginHorizontal: 20,
      paddingHorizontal: 20,
      fontSize: 20,
      borderStyle: 'solid',
      borderWidth: 1,
    },

    searchResultsItem: {
      borderColor: currentTheme.borders,
      height: 50,
      marginHorizontal: 20,
      borderStyle: 'solid',
      borderTopColor: 'transparent',
      borderWidth: 1,
    },

    firstItem: {
      borderTopColor: currentTheme.borders,
    },

    storeMap: {
      height: 150,
    },

    storeType: {
      color: currentTheme.primaryLight,
      backgroundColor: currentTheme.additionalLight,
      fontSize: 20,
      textAlign: 'center',
      padding: 5,
    },

    storeQuickContacts: {
      backgroundColor: currentTheme.additionalDark,
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    storeQuickContactsIcon : {
      color: currentTheme.primaryLight,
      fontSize: 40,
      lineHeight: 60,
    },

    storeFieldTitle: {
      color: currentTheme.additionalDark,
      fontSize: 18,
      padding: 10,
    },

    storeFieldText: {
      color: currentTheme.textDarker,
      fontSize: 22,
      padding: 5,
      paddingLeft: 40,
    },

    storeHoursDay: {
      flexDirection: 'row',
      paddingLeft: 40,
    },

    storeHoursDayTitle: {
      color: currentTheme.textDarker,
      fontSize: 20,
      flex: 1,
    },

    storeHoursDayTime: {
      color: currentTheme.textDarker,
      fontSize: 22,
      flex: 4,
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
      padding: 5,
    },

    settingsItem: {
      height: 125,
      flexDirection: 'row',
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
      width: 270,
    },

    settingsItemImage: {
      height: 200,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },

    signInForm: {
      marginTop: 30,
    },

    signInText: {
      color: currentTheme.textLighter,
      fontSize: 18,
      textAlign: 'center',
    },

    signUpText: {
      color: currentTheme.textLighter,
      fontSize: 18,
      marginVertical: 5,
      marginHorizontal: 40,
    },

    signInFormInput: {
      fontSize: 18,
      height: 50,
      marginHorizontal: 40,
      paddingHorizontal: 20,
      marginBottom: 5,
      borderColor: 'lightgray',
      borderWidth: 1,
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
    }
  });
}
