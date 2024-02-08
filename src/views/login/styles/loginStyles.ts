import {StylesLoginProps} from '@src/types/loginTypes';
import {StyleSheet} from 'react-native';

export const loginStyles = ({color}: StylesLoginProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      color: color,
    },
  });
