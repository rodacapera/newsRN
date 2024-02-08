import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '@src/types/globalTypes';
import { useEffect, useLayoutEffect } from 'react';
import BannerHook from '../../../components/banner/hooks/BannerHook';
import AlertHook from '../../../components/customAlert/hooks/AlertHook';
import { GetAllNews } from '../../../query/GlobalQuery';
import { HeaderShown } from '@src/navigator/HeaderShown';
import { Linking, useWindowDimensions } from 'react-native';
import { ActualTheme } from '@src/navigator/hook/GlobalTheme';

const HomeHook = () => {
  const navigation = useNavigation<StackNavigation>();
  const { width } = useWindowDimensions();
  const { colors, dark } = ActualTheme();
  const { data } = GetAllNews(); //Query example
  const user = false; //G et user to validate session

  //Work with custom banner and custom alert
  const continueBanner = () => {
    console.log('continue Banner');
  };
  const continueAlert = () => {
    console.log('continue Alert');
  };
  const { bannerVisible, setBannerVisible, handleBannerSuccessAction } =
    BannerHook({ actionSuccess: continueBanner });
  const { alertVisible, setAlertVisible, handleAlertSuccessAction } = AlertHook(
    {
      actionSuccess: continueAlert,
    }
  );

  const handleSuccessBtn = (link: string) => {
    Linking.openURL(link);
  };
  // ---------

  useLayoutEffect(() => {
    // !user && navigation.navigate('Login');
  }, [navigation, user]);

  useEffect(() => {
    HeaderShown({
      navigation,
      width: width,
      visible: true,
      transparent: true,
      titleColor: dark ? colors.onPrimary : colors.onPrimaryContainer,
    });
  }, [colors.onPrimaryContainer, navigation, width]);

  return {
    data: data?.data,
    bannerVisible,
    setBannerVisible,
    handleBannerSuccessAction,
    alertVisible,
    setAlertVisible,
    handleAlertSuccessAction,
    handleSuccessBtn,
  };
};

export default HomeHook;
