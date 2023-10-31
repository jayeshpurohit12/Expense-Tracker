import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {scale} from '../../../constants/Layout';

export const styles = StyleSheet.create({
  walletHeading: {
    color: colors.white.light2,
    fontSize: scale(20),
  },
  walletContainer: {
    padding: scale(20),
    marginTop: scale(10),
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: scale(20),
  },
  balanceContainer: {
    flexDirection: 'row',
    marginBottom: scale(4),
    alignItems: 'center',
  },
  availableText: {
    color: colors.white.light3,
    fontSize: scale(18),
  },
  totalAmount: {
    color: colors.white.light3,
    fontSize: scale(17),
    marginLeft: scale(20),
  },
  lineBreaker: {
    borderWidth: 1,
    borderColor: colors.white.light4,
    marginTop: scale(15),
    marginBottom: scale(7),
  },
  currentMonth: {
    textAlign: 'center',
    color: colors.white.light5,
    fontSize: scale(16),
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spentText: {
    color: colors.white.light3,
    fontSize: scale(17),
  },
  amount: {
    color: colors.white.light3,
    fontSize: scale(17),
    marginTop: scale(5),
    marginLeft: scale(20),
  },
  spentEarnedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(15),
    paddingRight: scale(20),
  },
});
