import { createReducer } from '@reduxjs/toolkit';
import { openModal, closeModal } from 'redux/actions';
import {
  fetchIncomes,
  setIncome,
  updateIncome,
  deleleteIncome,
} from 'redux/operations';

export const toggleModal = createReducer(null, {
  [openModal]: (_, action) => action.payload,
  [closeModal]: () => null,
});

export const financeService = createReducer([], {
  [fetchIncomes.fulfilled]: (state, action) => action.payload,
  [setIncome.fulfilled]: (state, action) => action.payload,
  [updateIncome.fulfilled]: (state, action) => action.payload,
  [deleleteIncome.fulfilled]: (state, action) => action.payload,
});
