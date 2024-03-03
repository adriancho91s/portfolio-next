// ** Toolkit imports
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

// ** Reducers
import { onRepeatApi } from "./components/onRepeat";
import { projectsApi } from "./components/projects";

export const store = configureStore({
  reducer: {
      [onRepeatApi.reducerPath]: onRepeatApi.reducer,
      [projectsApi.reducerPath]: projectsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(onRepeatApi.middleware)
      .concat(projectsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;