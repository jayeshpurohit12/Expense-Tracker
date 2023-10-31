import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../constants/Layout';
import colors from '../constants/colors';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    paddingHorizontal: scale(15),
  },
  safeView: {flex: 1},
  transactionHeading: {
    textAlign: 'center',
    fontSize: scale(23),
    color: colors.white.light2,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(20),
  },
  debitCreditContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white.light3,
    paddingVertical: verticalScale(3),
    paddingHorizontal: scale(5),
    width: scale(110),
    justifyContent: 'space-between',
    borderRadius: scale(20),
    alignItems: 'center',
  },
  debitCredit: {
    width: scale(20),
    height: scale(20),
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleStyle: {
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(5),
  },
  selectedToggle: {
    backgroundColor: colors.blue.light1,
    borderRadius: scale(20),
  },
  date: {
    color: colors.white.light3,
    fontSize: scale(14),
    fontWeight: 'bold',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: scale(20),
  },
  transactionsContainer: {
    marginBottom: scale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  allTransaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineBreaker: {
    borderWidth: 0.5,
    marginBottom: scale(15),
    borderColor: colors.white.light7,
  },
  transactionContentContainer: {
    paddingVertical: verticalScale(10),
  },
  transactionHighLow: {
    width: scale(20),
    height: scale(20),
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
  transactionWrap: {alignSelf: 'center', marginLeft: scale(10)},
  allTransactionView: {
    marginTop: scale(20),
    padding: scale(20),
    flex: 1,
  },
  handleIndicator: {display: 'none'},
});
