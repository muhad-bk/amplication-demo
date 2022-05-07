export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  location?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
