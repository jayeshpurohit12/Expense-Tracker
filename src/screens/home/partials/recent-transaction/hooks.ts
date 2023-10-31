import {useQuery} from 'react-query';
import {
  IFetchTransaction,
  fetchRecentTransactions,
  fetchTransactions,
} from '../../../apis/transactions';

export const useTransaction = ({date, userId, type}: IFetchTransaction) => {
  const {data, isLoading} = useQuery(
    ['fetch-transaction', userId, type, date],
    () => fetchTransactions({date, userId, type}),
  );

  return {data, isLoading};
};

export const useRecentTransaction = (userId: string) => {
  const {data, isLoading} = useQuery(['fetch-recent-transaction', userId], () =>
    fetchRecentTransactions(userId),
  );

  return {data, isLoading};
};
