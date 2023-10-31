import {StyleSheet} from 'react-native';
import {scale} from '../constants/Layout';
import colors from '../constants/colors';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: scale(15),
  },
  nameText: {
    textAlign: 'center',
    fontSize: scale(35),
    fontWeight: '500',
    color: colors.white.default,
  },
  settingIconContainer: {
    backgroundColor: '#ffffff54',
    borderWidth: 1,
    borderRadius: scale(20),
    borderColor: '#ffffff54',
    alignSelf: 'flex-end',
    top: scale(-20),
  },
  handleIndicator: {display: 'none'},
});
