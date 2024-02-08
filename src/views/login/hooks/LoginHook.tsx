import {useNavigation} from '@react-navigation/native';
import {HeaderShown} from '@src/navigator/HeaderShown';
import {StackNavigation} from '@src/types/globalTypes';
import {useEffect} from 'react';

const LoginHook = () => {
  const navigation = useNavigation<StackNavigation>();
  useEffect(() => {
    HeaderShown({
      navigation,
      visible: false,
      transparent: false,
    });
  }, [navigation]);
  return {};
};

export default LoginHook;
