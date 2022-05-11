import { UserAuthenticationStrategyUpdateManyWithoutUsersInput } from "./UserAuthenticationStrategyUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  failedLoginAttempt?: number | null;
  failedLoginTime?: Date | null;
  firstName?: string | null;
  isActive?: boolean | null;
  isLocked?: boolean | null;
  isRemoved?: boolean | null;
  lastName?: string | null;
  password?: string;
  phone?: string;
  roles?: Array<string>;
  userAuthenticationStrategies?: UserAuthenticationStrategyUpdateManyWithoutUsersInput;
  username?: string;
};
