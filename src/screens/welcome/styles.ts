import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {scale} from '../constants/Layout';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brandPrimary,
    paddingHorizontal: scale(15),
  },
  welcomeImage: {width: '100%', flex: 2},
  welcomeTextContainer: {
    flex: 1,
  },
  welcomeText: {
    color: colors.white.default,
    fontSize: scale(35),
  },
  welcomeDescription: {
    color: colors.white.default,
    marginTop: scale(15),
    fontSize: scale(13),
  },
  buttonContainer: {
    backgroundColor: colors.white.default,
    padding: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
    borderRadius: scale(30),
  },
  startedButtonText: {
    color: colors.blue.dark,
    fontSize: scale(20),
    fontWeight: '500',
  },
});
