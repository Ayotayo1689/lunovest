import { configureStore } from "@reduxjs/toolkit";
import { api } from "../features/api/apiSlice";
import sidebarReducer from "../redux/sidebarSlice";
import loadingReducer from "../redux/loadingSlice";

import userReducer from "../redux/userSlice";
import mobileSidebarReducer from "../redux/mobileSidebarSlice";
import { loadState, saveState } from "../utils/localStorage";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    loading: loadingReducer,
    mobileSidebar: mobileSidebarReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

store.subscribe(() => {
  saveState({
    sidebar: store.getState().sidebar,
    loading: store.getState().loading,
    user: store.getState().user,
  });
});

// export default store;
