import {useMutation, useQueryClient} from 'react-query';
import {IUpdateInfo, updateInfo} from '../apis/updateInfo';
import {useNavigation} from '@react-navigation/native';
import {storage} from '../../storage';

export const useUpdateInfo = () => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const {mutate, isLoading} = useMutation({
    mutationKey: 'updateInfo',
    mutationFn: ({userId, name, balance, income}: IUpdateInfo) =>
      updateInfo({
        userId,
        name,
        balance,
        income,
      }),
    onSuccess: data => {
      storage.set('userInfo', JSON.stringify(data?.user));

      queryClient.invalidateQueries('fetch-wallet');

      navigation.goBack();
    },
  });

  return {
    mutate,
    isLoading,
  };
};
