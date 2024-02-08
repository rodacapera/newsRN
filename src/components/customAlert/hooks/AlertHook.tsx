import {useState} from 'react';

const AlertHook = ({actionSuccess}: {actionSuccess: () => void}) => {
  const [alertVisible, setAlertVisible] = useState(true);

  const handleAlertSuccessAction = (value: boolean) => {
    value ? actionSuccess() : setAlertVisible(false);
  };

  return {alertVisible, setAlertVisible, handleAlertSuccessAction};
};

export default AlertHook;
