import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { GroupChat } from "../../data/Interfaces";

const initialMessages = localStorage.getItem("messages");
const initialUsers = localStorage.getItem("users");
const initialState: GroupChat = {
  id: "ac069757-5e0a-4437-8ad6-f0dc266803cc",
  users: initialUsers ? JSON.parse(initialUsers) : [],
  messages: initialMessages ? JSON.parse(initialMessages) : [],
  currentUser: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    addUserToList: (state, { payload }) => {
      state.currentUser = payload;
      const users = [...state.users, payload];
      state.users = users;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    addMessage: (state, { payload }) => {
      console.log("...adding Message");
      const messages = [...state.messages, payload];
      state.messages = messages;
      localStorage.setItem("messages", JSON.stringify(messages));
    },
  },
});

export const { addCurrentUser, addMessage, addUserToList } = chatSlice.actions;

export default chatSlice.reducer;
