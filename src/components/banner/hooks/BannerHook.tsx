import {useState} from 'react';

const BannerHook = ({actionSuccess}: {actionSuccess: () => void}) => {
  const [bannerVisible, setBannerVisible] = useState(true);

  const handleBannerSuccessAction = (value: boolean) => {
    value ? actionSuccess() : setBannerVisible(false);
  };

  return {bannerVisible, setBannerVisible, handleBannerSuccessAction};
};

export default BannerHook;
