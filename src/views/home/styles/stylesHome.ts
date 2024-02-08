import {StatusBar, StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginTop: 20,
  },
  content: {
    marginHorizontal: 20,
  },
  customCard: {
    marginVertical: 10,
  },
});
