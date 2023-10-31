import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {scale} from '../constants/Layout';

export const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  creditDebitText: {
    color: colors.white.default,
    fontSize: scale(30),
    marginRight: scale(10),
  },
  creditDebitImage: {
    width: scale(25),
    height: scale(25),
  },
  blurView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: scale(15),
  },
  textInput: {padding: scale(15), color: colors.white.default},
  flexView: {
    marginBottom: scale(25),
  },
  buttonContainer: {
    borderWidth: 1,
    padding: scale(15),
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white.light3,
    borderColor: colors.white.light3,
    marginTop: scale(10),
  },
  submitText: {
    fontSize: scale(17),
    fontWeight: '600',
    color: colors.blue.dark,
  },
  error: {
    color: colors.red.dark,
    top: scale(-20),
    marginLeft: scale(10),
  },
  handleIndicator: {display: 'none'},
});
