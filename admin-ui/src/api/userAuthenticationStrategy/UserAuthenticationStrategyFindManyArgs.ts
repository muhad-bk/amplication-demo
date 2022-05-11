import { UserAuthenticationStrategyWhereInput } from "./UserAuthenticationStrategyWhereInput";
import { UserAuthenticationStrategyOrderByInput } from "./UserAuthenticationStrategyOrderByInput";

export type UserAuthenticationStrategyFindManyArgs = {
  where?: UserAuthenticationStrategyWhereInput;
  orderBy?: Array<UserAuthenticationStrategyOrderByInput>;
  skip?: number;
  take?: number;
};
