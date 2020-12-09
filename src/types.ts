export type User = {
  id: string;
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
