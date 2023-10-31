import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';

export interface ICustomTextInput {
  placeholder: string;
  isNumber?: boolean;
  handleChange: (text: string) => void;
  value?: string;
  error?: string;
  handleBlur: (text: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}
