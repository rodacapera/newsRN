import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, MD3Colors, Portal} from 'react-native-paper';
import {customLoadingStyles} from './styles/customLoadingStyles';
import {LoadingParams} from '../../types/loadingTypes';

const CustomLoading = ({
  color,
  portal,
  size,
  portalBackground,
}: LoadingParams) => {
  return portal ? (
    <Portal>
      <View
        style={
          customLoadingStyles({background: portalBackground ?? 'white'})
            .container
        }>
        <ActivityIndicator
          animating={true}
          color={color ?? MD3Colors.primary0}
        />
      </View>
    </Portal>
  ) : (
    <ActivityIndicator
      isTVSelectable
      animating={true}
      color={color}
      size={size}
    />
  );
};

export default CustomLoading;
