import { UserAuthenticationStrategy } from "../userAuthenticationStrategy/UserAuthenticationStrategy";

export type AuthenticationStrategy = {
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean | null;
  isRemoved: boolean | null;
  provider: string;
  updatedAt: Date;
  userAuthenticationStrategies?: Array<UserAuthenticationStrategy>;
};
