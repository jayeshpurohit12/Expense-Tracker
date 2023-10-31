import {expenseAxios} from '../../services/axios';

export interface ISignup {
  username: string;
  name: string;
  balance: number;
  income: number;
}

export const addSignup = async ({username, name, balance, income}: ISignup) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await expenseAxios.post('/api/signup', {
        username,
        name,
        balance,
        income,
      });
      resolve(res.data);
    } catch (err: any) {
      reject(err?.response?.data?.message);
    }
  });
};
