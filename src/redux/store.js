import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { toggleModal, financeService } from './redusers';

const rootReducer = combineReducers({
  modalData: toggleModal,
  financeService,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
