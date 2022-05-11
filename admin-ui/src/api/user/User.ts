import { UserAuthenticationStrategy } from "../userAuthenticationStrategy/UserAuthenticationStrategy";

export type User = {
  createdAt: Date;
  email: string | null;
  failedLoginAttempt: number | null;
  failedLoginTime: Date | null;
  firstName: string | null;
  id: string;
  isActive: boolean | null;
  isLocked: boolean | null;
  isRemoved: boolean | null;
  lastName: string | null;
  phone: string;
  roles: Array<string>;
  updatedAt: Date;
  userAuthenticationStrategies?: Array<UserAuthenticationStrategy>;
  username: string;
};
