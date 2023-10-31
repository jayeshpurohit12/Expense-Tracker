import {expenseAxios} from '../../services/axios';

export interface IFetchTransaction {
  userId?: string;
  date?: string;
  type?: string;
}

export const fetchRecentTransactions = async (userId: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await expenseAxios.get('/api/transactions/recent', {
        params: {
          userId,
        },
      });
      resolve(res.data);
    } catch (error: any) {
      reject(error?.response?.data?.message);
    }
  });
};

export const fetchTransactions = async ({
  userId,
  date,
  type,
}: IFetchTransaction) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await expenseAxios.get('/api/transactions', {
        params: {
          userId,
          date,
          type,
        },
      });
      resolve(res.data);
    } catch (error: any) {
      reject(error?.response?.data?.message);
    }
  });
};

export interface IFetchTransaction {
  userId?: string;
  date?: string;
  type?: string;
}

export interface IAddTransactions {
  userId: string;
  date: string;
  type: string;
  name: string;
  amount: number;
  category: string;
}

export interface IError {
  response: unknown;
}

export const addTransactions = async ({
  userId,
  date,
  type,
  name,
  amount,
  category,
}: IAddTransactions) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await expenseAxios.post('/api/transactions', {
        userId,
        date,
        type,
        name,
        amount,
        category,
      });

      resolve(res.data);
    } catch (error: any) {
      reject(error?.response?.data?.message);
    }
  });
};
