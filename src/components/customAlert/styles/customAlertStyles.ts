import {StyleSheet} from 'react-native';
import {StylesAlertProps} from '../../../types/alertTypes';

export const customAlertStyles = ({
  backgroundColor,
  titleColor,
  descriptionColor,
}: StylesAlertProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
    },
    title: {
      color: titleColor ?? 'black',
      textAlign: 'center',
    },
    description: {
      color: descriptionColor ?? 'black',
      textAlign: 'justify',
    },
  });
