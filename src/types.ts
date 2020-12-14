export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
  };

  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
};

export type SharedProps = {
  registerUser: (user: User) => void;
  unregisterUser: (user: User) => void;
  unregisteredUsers: User[];
  registeredUsers: User[];
  data: User[];
};
