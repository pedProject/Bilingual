import { configureStore } from "@reduxjs/toolkit";

import { api } from "./api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (getDM) => {
    return getDM().concat(api.middleware);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
