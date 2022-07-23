import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { toggleModal } from './redusers';

const rootReducer = combineReducers({
  modalData: toggleModal,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
