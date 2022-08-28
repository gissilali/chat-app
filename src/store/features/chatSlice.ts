import { createSlice } from "@reduxjs/toolkit";
import { GroupChat } from "../../data/Interfaces";

const initialState: GroupChat = {
  id: "ac069757-5e0a-4437-8ad6-f0dc266803cc",
  users: [],
  messages: [],
};

const chatSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {},
});

export default chatSlice.reducer;
