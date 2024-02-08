import {darkTheme} from '@src/theme/darkMode';
import {lightTheme} from '@src/theme/lightMode';
import {ThemeContextMode} from '@src/types/contextTypes';
import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';

export const customLightTheme = {
  ...MD3LightTheme,
  colors: lightTheme.colors,
} as ThemeContextMode;

export const customDarkTheme = {
  ...MD3DarkTheme,
  colors: darkTheme.colors,
} as ThemeContextMode;
