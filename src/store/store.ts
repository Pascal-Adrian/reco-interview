import { configureStore } from "@reduxjs/toolkit";
import { appRowsApi } from "./appRowsApi";

export const store = configureStore({
  reducer: {
    [appRowsApi.reducerPath]: appRowsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appRowsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
