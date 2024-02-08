export interface BannerParams {
  image?: string;
  visible: boolean;
  setVisible: (e: boolean) => void;
  labelButtonSuccess?: string;
  labelButtonCancel?: string;
  successAction?: (e: boolean) => void;
  label?: string;
}

export type HandleSetVisibleProps = {
  value: boolean;
  success: boolean;
};
