import {Text, TouchableOpacity} from 'react-native';
import React, {MutableRefObject} from 'react';
import FastImage from 'react-native-fast-image';
import Images from '../../../../Images';
import {styles} from './styles';
import {scale} from '../../../constants/Layout';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';

interface ITransactionSelectModal {
  bottomSheetRef: MutableRefObject<BottomSheet | null>;
}

const TransactionSelectModal = ({bottomSheetRef}: ITransactionSelectModal) => {
  const navigation = useNavigation();

  const handleAddIncome = () => {
    navigation.navigate('AddTransactions', {
      paymentType: 'credited',
    });
    bottomSheetRef?.current?.close();
  };

  const handleAddExpense = () => {
    navigation.navigate('AddTransactions', {
      paymentType: 'debited',
    });
    bottomSheetRef?.current?.close();
  };

  return (
    <SafeAreaView
      style={styles.modalContainer}
      edges={['bottom', 'left', 'right']}>
      <TouchableOpacity
        style={styles.addIncomeContainer}
        activeOpacity={0.9}
        onPress={handleAddIncome}>
        <FastImage source={Images.AddIncome} style={styles.addIncomeImage} />
        <Text style={styles.expenseText}>Add Income</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addIncomeContainer}
        activeOpacity={0.9}
        onPress={handleAddExpense}>
        <FastImage source={Images.AddExpense} style={styles.addExpenseImage} />
        <Text style={[styles.expenseText, {marginTop: scale(12)}]}>
          Add Expense
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TransactionSelectModal;
