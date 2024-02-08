import React from 'react';
import {Text} from 'react-native';
import {t} from 'i18next';
import {ActualTheme} from '@src/navigator/hook/GlobalTheme';
import {loginStyles} from './styles/loginStyles';
import LoginHook from './hooks/LoginHook';
import {SafeAreaView} from 'react-native-safe-area-context';

const Login = () => {
  const {colors} = ActualTheme();
  const {} = LoginHook();
  return (
    <SafeAreaView>
      <Text style={loginStyles({color: colors.onSurface}).title}>
        {t('loginView.title')}
      </Text>
    </SafeAreaView>
  );
};

export default Login;
