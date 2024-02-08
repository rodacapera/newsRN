import React from 'react';
import {Image} from 'react-native';
import {IconParams} from '../../types/iconTypes';

export const icon = (params: IconParams) => {
  return (
    params.image && (
      <Image
        source={{
          uri: params.image,
        }}
        style={{
          width: params.size,
          height: params.size,
        }}
      />
    )
  );
};
