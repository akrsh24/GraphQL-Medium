type Contact = {
  firstName: string;
  lastName: string;
};

export type FriendModel = {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  language: string;
  age: number;
  email: string;
  contacts: [Contact];
};
