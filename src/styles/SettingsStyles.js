import themes from '../themes/themes';

export default function(theme) {
  const currentTheme = themes[theme];

  return ({
    title: {
      color: currentTheme.primaryLight,
      backgroundColor: currentTheme.additionalLight,
      fontSize: 20,
      textAlign: 'center',
      padding: 5,
    },

    item: {
      height: 125,
      flexDirection: 'row',
    },

    itemText: {
      fontSize: 25,
      paddingHorizontal: 10,
      fontWeight: '300',
      paddingVertical: 7,
    },

    itemTextContainer: {
      height: 45,
      marginTop: 80,
      width: 270,
    },

    itemImage: {
      height: 200,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  });
};
