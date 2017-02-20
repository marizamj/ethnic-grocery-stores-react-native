import themes from '../themes/themes';

export default function(theme) {
  const currentTheme = themes[theme];

  return ({
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
  });
};
