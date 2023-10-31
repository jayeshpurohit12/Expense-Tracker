import {useQuery} from 'react-query';
import {fetchWallet} from '../../../apis/wallet';

export const useWallet = (userId: string) => {
  const {data, isLoading} = useQuery(['fetch-wallet'], () =>
    fetchWallet(userId),
  );

  return {data, isLoading};
};
