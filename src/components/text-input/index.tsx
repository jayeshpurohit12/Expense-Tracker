import {View, TextInput, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import colors from '../../screens/constants/colors';
import {ICustomTextInput} from './interface';

const CustomTextInput = ({
  placeholder,
  isNumber,
  handleBlur,
  handleChange,
  error,
  value,
}: ICustomTextInput) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor={colors.white.default}
        onChangeText={text => handleChange(text)}
        value={value}
        keyboardType={isNumber ? 'numeric' : 'default'}
        onBlur={handleBlur}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;
