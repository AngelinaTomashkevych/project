import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchServise } from 'api/fetchService';

export const fetchIncomes = createAsyncThunk('fetchIncomes', () =>
  fetchServise({ url: '/incomes' })
);

export const setIncome = createAsyncThunk('setIncomes', (payload) =>
  fetchServise({ url: '/incomes', method: 'post', payload })
);

export const updateIncome = createAsyncThunk('updateIncomes', (payload) =>
  fetchServise({ url: '/incomes', method: 'patch', payload })
);

export const deleleteIncome = createAsyncThunk('deleteIncome', (payload) =>
  fetchServise({ url: '/incomes', method: 'delete', payload })
);
