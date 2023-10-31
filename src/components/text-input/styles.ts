import {StyleSheet} from 'react-native';
import colors from '../../screens/constants/colors';
import {scale} from '../../screens/constants/Layout';

export const styles = StyleSheet.create({
  textInput: {
    color: colors.white.default,
    borderBottomColor: colors.white.default,
    borderBottomWidth: 1.2,
    paddingBottom: scale(5),
    marginBottom: scale(30),
    width: '90%',
  },
  error: {
    color: colors.red.dark,
    fontSize: scale(12),
    top: scale(-20),
  },
});
