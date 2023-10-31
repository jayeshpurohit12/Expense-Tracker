import {StyleSheet} from 'react-native';
import {scale} from '../constants/Layout';
import colors from '../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(15),
  },
  headerText: {
    color: colors.white.default,
    fontSize: scale(30),
    textAlign: 'center',
  },
  inputAllContainer: {
    borderRadius: scale(20),
    paddingHorizontal: scale(20),
    paddingTop: scale(40),
    paddingBottom: scale(10),
    marginTop: '40%',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: scale(20),
  },
  buttonContainer: {
    backgroundColor: colors.white.default,
    padding: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
    borderRadius: scale(30),
    width: '50%',
    alignSelf: 'flex-end',
  },
  startedButtonText: {
    color: colors.blue.dark,
    fontSize: scale(20),
    fontWeight: '500',
  },
});
