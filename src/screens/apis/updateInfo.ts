import {expenseAxios} from '../../services/axios';

export interface IUpdateInfo {
  userId: string;
  name: string;
  balance: number;
  income: number;
}

export const updateInfo = ({userId, name, balance, income}: IUpdateInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await expenseAxios.post('/api/update', {
        userId,
        name,
        balance,
        income,
      });
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
};
