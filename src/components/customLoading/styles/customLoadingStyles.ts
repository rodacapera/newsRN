import {StyleSheet} from 'react-native';
import {StylesLoadingProps} from '../../../types/loadingTypes';

export const customLoadingStyles = ({background}: StylesLoadingProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: background,
      opacity: 0.7,
      flex: 1,
      justifyContent: 'center',
    },
  });
