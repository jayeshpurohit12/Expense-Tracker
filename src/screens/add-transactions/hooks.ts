import {useMutation, useQueryClient} from 'react-query';
import {IAddTransactions, addTransactions} from '../apis/transactions';
import {useNavigation} from '@react-navigation/native';

export const useAddTransaction = () => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  const {mutate, isLoading} = useMutation({
    mutationKey: 'add-transaction',
    mutationFn: ({
      userId,
      date,
      type,
      name,
      amount,
      category,
    }: IAddTransactions) =>
      addTransactions({
        userId,
        date,
        type,
        name,
        amount,
        category,
      }),
    onSuccess: () => {
      navigation.goBack();

      queryClient.invalidateQueries('fetch-transaction');
      queryClient.invalidateQueries('fetch-wallet');
      queryClient.invalidateQueries('fetch-recent-transaction');
    },
  });

  return {mutate, isLoading};
};
