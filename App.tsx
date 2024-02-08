import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { LateralDrawer } from '@src/navigator/LateralDrawer';
import CustomTheme from '@src/globals/constants/CustomTheme';
import ThemeProvider from '@src/theme/ThemeContext';
import '@src/lang/i18n';

const queryClient = new QueryClient();

const App = () => {
  const { customDefaultTheme } = CustomTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <PaperProvider theme={customDefaultTheme}>
          <NavigationContainer>
            <LateralDrawer />
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
