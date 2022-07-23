import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import { toggleModal } from "./redusers";

const rootReducer = combineReducers({
  modal_data: toggleModal,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
