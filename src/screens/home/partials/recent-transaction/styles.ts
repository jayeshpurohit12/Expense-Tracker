import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../constants/Layout';
import colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scale(20),
  },
  transactionHeading: {
    color: colors.white.light2,
    fontSize: scale(20),
  },
  transactionContainer: {
    padding: scale(15),
    marginTop: scale(10),
    flex: 1,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: scale(20),
  },
  recentTransactionDate: {
    color: colors.white.light5,
    fontSize: scale(16),
  },
  transactionsContainer: {
    marginBottom: scale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionHighLow: {
    width: scale(20),
    height: scale(20),
  },
  transactionContentContainer: {
    paddingVertical: verticalScale(20),
  },
  recentTransactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineBreaker: {
    borderWidth: 0.5,
    marginBottom: scale(15),
    borderColor: colors.white.light7,
  },
  transactionName: {
    color: colors.white.default,
    fontSize: scale(17),
  },
  transactionCategory: {
    color: colors.white.default,
    fontSize: scale(10),
    marginTop: scale(3),
  },
  transactionAmount: {
    color: colors.white.default,
    fontSize: scale(16),
  },
  transactionDate: {
    color: colors.white.default,
    fontSize: scale(12),
    marginTop: scale(3),
    alignSelf: 'flex-end',
  },
  addExpenses: {
    backgroundColor: colors.white.light4,
    top: '-6.3%',
    alignSelf: 'center',
    borderRadius: scale(30),
  },
});
