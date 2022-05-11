import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  failedLoginAttempt?: SortOrder;
  failedLoginTime?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isLocked?: SortOrder;
  isRemoved?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
