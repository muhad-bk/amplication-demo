import { SortOrder } from "../../util/SortOrder";

export type UserAuthenticationStrategyOrderByInput = {
  authenticationStrategyId?: SortOrder;
  createdAt?: SortOrder;
  expiresWithin?: SortOrder;
  externalIdentifier?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isRemoved?: SortOrder;
  passwordHash?: SortOrder;
  passwordResetToken?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  verificationToken?: SortOrder;
};
