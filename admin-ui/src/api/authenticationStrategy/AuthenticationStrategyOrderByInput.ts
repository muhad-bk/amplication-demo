import { SortOrder } from "../../util/SortOrder";

export type AuthenticationStrategyOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isRemoved?: SortOrder;
  provider?: SortOrder;
  updatedAt?: SortOrder;
};
