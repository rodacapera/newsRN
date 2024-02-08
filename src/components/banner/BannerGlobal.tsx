import React from 'react';
import {Banner} from 'react-native-paper';
import {icon} from '../customIcon/customIcon';
import {IconParams} from '../../types/iconTypes';
import {BannerParams, HandleSetVisibleProps} from '../../types/bannerTypes';

const BannerGlobal = (params: BannerParams) => {
  const handleSetVisible = ({value, success}: HandleSetVisibleProps) => {
    params.setVisible(value);
    params?.successAction && params.successAction(success);
  };

  return (
    <Banner
      visible={params.visible ?? false}
      actions={[
        {
          label: params.labelButtonCancel ?? 'Cancel',
          onPress: () => handleSetVisible({value: false, success: false}),
        },
        {
          label: params.labelButtonSuccess ?? 'Continue',
          onPress: () => handleSetVisible({value: false, success: true}),
        },
      ]}
      icon={props =>
        icon({
          ...props,
          image: params.image,
        } as IconParams)
      }>
      {params.label}
    </Banner>
  );
};

export default BannerGlobal;
