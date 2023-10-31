import {StyleSheet} from 'react-native';
import {scale} from '../../../constants/Layout';
import colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  modalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(45),
    flex: 1,
  },
  addIncomeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIncomeImage: {
    width: scale(50),
    height: scale(50),
  },
  addExpenseImage: {
    width: scale(40),
    height: scale(40),
  },
  expenseText: {
    fontSize: scale(16),
    color: colors.white.default,
  },
});
