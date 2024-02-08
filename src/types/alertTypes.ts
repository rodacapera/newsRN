export interface AlertParams {
  titleColor?: string;
  descriptionColor?: string;
  title: string;
  description?: string;
  icon?: string;
  labelButtonSuccess?: string;
  labelButtonCancel?: string;
  successAction?: (e: boolean) => void;
  visible: boolean;
  setVisible: (e: boolean) => void;
}
export type StylesAlertProps = {
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
};

export type HandleAlertSetVisibleProps = {
  value: boolean;
  success: boolean;
};
