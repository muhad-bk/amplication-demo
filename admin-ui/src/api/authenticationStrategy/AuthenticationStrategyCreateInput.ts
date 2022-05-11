import { UserAuthenticationStrategyCreateNestedManyWithoutAuthenticationStrategiesInput } from "./UserAuthenticationStrategyCreateNestedManyWithoutAuthenticationStrategiesInput";

export type AuthenticationStrategyCreateInput = {
  description?: string | null;
  isActive?: boolean | null;
  isRemoved?: boolean | null;
  provider: string;
  userAuthenticationStrategies?: UserAuthenticationStrategyCreateNestedManyWithoutAuthenticationStrategiesInput;
};
