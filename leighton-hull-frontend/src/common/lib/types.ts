export interface Callbacks {
  beforeAPICall?: () => void;
  afterAPICall?: () => void;
  onSuccess?: () => void;
  onError?: () => void;
}

export interface IFrame {
  imageName?: string;
  title?: string;
}
