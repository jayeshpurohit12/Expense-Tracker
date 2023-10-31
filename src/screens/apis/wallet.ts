import {expenseAxios} from '../../services/axios';

export const fetchWallet = async (userId: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await expenseAxios.get('/api/wallet', {
        params: {
          userId,
        },
      });
      resolve(res.data);
    } catch (err: any) {
      reject(err?.response?.data?.message);
    }
  });
};
