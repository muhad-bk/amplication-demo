export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  location: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
