import store from "../store";

export interface User {
  username: string;
  id: string;
}

export interface Message {
  text: string;
  dateSent: string;
  userId: string;
  chatId: string;
}

export interface UserStore {
  currentUser: User;
  users: User[];
  newUser: User;
}

export interface GroupChat {
  currentUser?: User | null;
  users: User[];
  messages: Message[];
  id: string;
}

export type RootState = ReturnType<typeof store.getState>;
