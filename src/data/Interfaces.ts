export interface User {
  username: string;
  id: string;
}

export interface Message {
  text: string;
  dateSent: string;
}

export interface UserStore {
  currentUser: User;
  users: User[];
  newUser: User;
}

export interface GroupChat {
  users: User[];
  messages: Message[];
  id: string;
}
