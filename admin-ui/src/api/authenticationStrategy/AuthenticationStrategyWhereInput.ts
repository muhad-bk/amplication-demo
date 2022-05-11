import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserAuthenticationStrategyListRelationFilter } from "../userAuthenticationStrategy/UserAuthenticationStrategyListRelationFilter";

export type AuthenticationStrategyWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  isRemoved?: BooleanNullableFilter;
  provider?: StringFilter;
  userAuthenticationStrategies?: UserAuthenticationStrategyListRelationFilter;
};
