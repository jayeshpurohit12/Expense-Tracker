import {useMutation} from 'react-query';
import {ISignup, addSignup} from '../apis/signup';
import {storage} from '../../storage';

export const useSignup = () => {
  const {mutateAsync, data, error, isError, isSuccess, isLoading} = useMutation(
    {
      mutationKey: 'signup',
      mutationFn: ({username, name, balance, income}: ISignup) =>
        addSignup({
          username,
          name,
          balance,
          income,
        }),
      onSuccess: data => {
        storage.set('userInfo', JSON.stringify(data?.user));
      },
    },
  );

  return {mutateAsync, data, error, isSuccess, isError, isLoading};
};
