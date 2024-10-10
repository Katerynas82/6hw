import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfigContact = {
  key: "rootContact",
  version: 1,
  storage,
};
const persistConfigFilter = {
  key: "rootFilter",
  version: 1,
  storage,
};

// const persistedReducer = persistReducer(persistConfigContact, contactsReducer);


export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfigContact, contactsReducer),
    filters: persistReducer(persistConfigFilter, filtersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});



export let persistor = persistStore(store);