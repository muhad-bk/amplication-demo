import { UserAuthenticationStrategyUpdateManyWithoutAuthenticationStrategiesInput } from "./UserAuthenticationStrategyUpdateManyWithoutAuthenticationStrategiesInput";

export type AuthenticationStrategyUpdateInput = {
  description?: string | null;
  isActive?: boolean | null;
  isRemoved?: boolean | null;
  provider?: string;
  userAuthenticationStrategies?: UserAuthenticationStrategyUpdateManyWithoutAuthenticationStrategiesInput;
};
