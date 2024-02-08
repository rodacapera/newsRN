export type BackgroundColorPortal =
  | 'white'
  | 'black'
  | 'red'
  | 'blue'
  | 'yellow'
  | 'string';

export interface LoadingParams {
  color?: string;
  portal?: boolean;
  size?: number;
  portalBackground?: BackgroundColorPortal;
}

export type StylesLoadingProps = {
  background: BackgroundColorPortal;
};
