import React from 'react';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import {AlertParams, HandleAlertSetVisibleProps} from '../../types/alertTypes';
import {customAlertStyles} from './styles/customAlertStyles';

const CustomAlert = ({
  descriptionColor,
  titleColor,
  ...params
}: AlertParams) => {
  const handleSetVisible = ({value, success}: HandleAlertSetVisibleProps) => {
    params.setVisible(value);
    params?.successAction && params.successAction(success);
  };
  return (
    <Portal>
      <Dialog
        visible={params.visible ?? false}
        onDismiss={() => handleSetVisible({value: false, success: false})}>
        {params.icon && <Dialog.Icon icon={params.icon} />}
        <Dialog.Title style={customAlertStyles({titleColor}).title}>
          {params.title}
        </Dialog.Title>
        <Dialog.Content>
          <Text
            style={customAlertStyles({descriptionColor}).description}
            variant="bodyMedium">
            {params.description}
          </Text>
        </Dialog.Content>
        {params.successAction ? (
          <Dialog.Actions>
            <Button
              onPress={() => handleSetVisible({value: false, success: false})}>
              {params.labelButtonCancel}
            </Button>
            <Button
              onPress={() => handleSetVisible({value: false, success: true})}>
              {params.labelButtonSuccess}
            </Button>
          </Dialog.Actions>
        ) : (
          <Dialog.Actions>
            <Button
              onPress={() => handleSetVisible({value: false, success: false})}>
              {params.labelButtonSuccess ?? 'Ok'}
            </Button>
          </Dialog.Actions>
        )}
      </Dialog>
    </Portal>
  );
};

export default CustomAlert;
