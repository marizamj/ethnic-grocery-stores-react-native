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
      borderColor: currentTheme.borders,
      borderBottomWidth: currentTheme.barStyle === 'dark-content' ? 1  : 0,
    },

    headerIconContainer: {
      marginTop: 8,
      width: 45,
    },

    headerIcon: {
      color: currentTheme.primaryLight,
      fontSize: 30,
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

    searchInputContainer: {
      borderColor: currentTheme.primaryDark,
      borderBottomWidth: 1,
    },

    searchInput: {
      borderColor: currentTheme.primaryDark,
      color: currentTheme.textDarker,
      height: 50,
      marginVertical: 15,
      marginHorizontal: 20,
      paddingHorizontal: 20,
      fontSize: 20,
      borderStyle: 'solid',
      borderWidth: 1,
    },

    searchHeader: {
      color: currentTheme.primaryLight,
      backgroundColor: currentTheme.primaryDark,
      fontSize: 20,
      paddingHorizontal: 20,
      paddingVertical: 5,
    },

    searchStore: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderColor: currentTheme.primaryDark,
    },

    searchStoreTitle: {
      color: currentTheme.additionalDark,
      fontSize: 22,
      marginBottom: 5,
    },

    searchStoreType: {
      color: currentTheme.textDarker,
      fontSize: 18,
    },

    searchStoreAddress: {
      color: currentTheme.textLighter,
      fontSize: 18,
    },

    firstItem: {
      borderTopWidth: 1,
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

    storeHours: {
      marginBottom: 20,
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
      color: currentTheme.links,
      fontSize: 40,
      marginHorizontal: 10,
      marginBottom: 20,
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

    addStoreMessage: {
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

    addStoreText: {
      color: currentTheme.textLighter,
      fontSize: 20,
      marginHorizontal: 20,
      marginTop: 10,
    },

    addStoreInput: {
      borderColor: currentTheme.textLighter,
      color: currentTheme.textDarker,
      borderWidth: 1,
      fontSize: 20,
      height: 40,
      marginTop: 10,
      marginHorizontal: 20,
      paddingHorizontal: 10,
    },

    addStoreTypesContainer: {
      marginTop: 10,
      flexDirection: 'row',
      marginLeft: 10,
      marginRight: 20,
    },

    addStoreTypesColumn: {
      flex: 1,
      marginLeft: 10,
    },

    addStoreType: {
      borderColor: currentTheme.primaryDark,
      borderWidth: 1,
      borderRadius: 20,
      flexDirection: 'row',
      height: 36,
      marginVertical: 5,
    },

    addStoreTypeChecked: {
      backgroundColor: currentTheme.primaryDark,
      borderColor: currentTheme.primaryDark,
      borderWidth: 1,
      borderRadius: 20,
      flexDirection: 'row',
      height: 36,
      marginVertical: 5,
    },

    addStoreTypeIcon: {
      color: currentTheme.primaryDark,
      borderRadius: 20,
      fontSize: 28,
      height: 26,
      marginVertical: 3,
      marginHorizontal: 7,
    },

    addStoreTypeIconChecked: {
      color: currentTheme.primaryLight,
      borderRadius: 20,
      fontSize: 28,
      height: 26,
      marginVertical: 3,
      marginHorizontal: 7,
    },

    addStoreTypeText: {
      color: currentTheme.textDarker,
      fontSize: 18,
      paddingTop: 5,
    },

    addStoreTypeTextChecked: {
      color: currentTheme.primaryLight,
      fontSize: 18,
      paddingTop: 5,
    },

    addStoreSubmit: {
      marginVertical: 20,
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

    pLink: {
      color: currentTheme.links,
      textDecorationLine: 'underline',
    },
  });
}
