import { configureStore } from "@reduxjs/toolkit";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import chatReducer from "./features/chatSlice";

const config = {
  blacklist: ["chat/addCurrentUser"],
};

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createStateSyncMiddleware(config)),
});

initMessageListener(store);

export default store;
