import { AuthenticationStrategyWhereInput } from "./AuthenticationStrategyWhereInput";
import { AuthenticationStrategyOrderByInput } from "./AuthenticationStrategyOrderByInput";

export type AuthenticationStrategyFindManyArgs = {
  where?: AuthenticationStrategyWhereInput;
  orderBy?: Array<AuthenticationStrategyOrderByInput>;
  skip?: number;
  take?: number;
};
