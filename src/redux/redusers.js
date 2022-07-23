import { createReducer } from '@reduxjs/toolkit';
import { openModal, closeModal } from 'redux/actions';

export const toggleModal = createReducer(null, {
  [openModal]: (_, action, a) => action.payload,
  [closeModal]: () => null,
});
