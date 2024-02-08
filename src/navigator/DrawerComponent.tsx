import React from 'react';
// import {Fragment} from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  // DrawerItem,
  // DrawerItemList,
} from '@react-navigation/drawer';
// import {useNavigation} from '@react-navigation/native';
// import {StackNavigation} from '@src/types/globalTypes';
// import {t} from 'i18next';
import { View } from 'react-native';
import {
  // Avatar,
  // Caption,
  // Drawer,
  // Paragraph,
  // Switch,
  Text,
  // Title,
} from 'react-native-paper';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {DrawerComponentHook} from './hook/DrawerComponentHook';
import { drawerComponentStyles } from './styles/drawerComponentStyles';

const DrawerComponent = (props: DrawerContentComponentProps) => {
  // const navigation = useNavigation<StackNavigation>();
  // const {
  //   handleLogout,
  //   onToggleSwitch,
  //   isDark,
  //   colors,
  //   theme,
  //   user,
  //   logos,
  //   counterEmployees,
  //   counterButtons,
  //   isLoading,
  //   imageAvatar,
  //   configuration,
  // } = DrawerComponentHook(navigation);

  // const customIcon = (size: number, name: string) => {
  //   return (
  //     <MaterialCommunityIcons
  //       name={name}
  //       color={colors.onSurface}
  //       size={size}
  //     />
  //   );
  // };

  return (
    <DrawerContentScrollView
      {...props}
      style={drawerComponentStyles.drawerContent}
    >
      <View>{/* <Text>Hello</Text> */}</View>
    </DrawerContentScrollView>
  );
};
export default DrawerComponent;
