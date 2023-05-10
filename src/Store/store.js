import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./userApi";
import { setupListeners } from '@reduxjs/toolkit/query'
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    users:userReducer
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
});
setupListeners(store.dispatch)