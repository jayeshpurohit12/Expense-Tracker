import axios from 'axios';

export const expenseAxios = axios.create({
  baseURL: 'https://expense-tracker-api-git-master-shivamgit01.vercel.app',
});
