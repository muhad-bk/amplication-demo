import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserAuthenticationStrategyListRelationFilter } from "../userAuthenticationStrategy/UserAuthenticationStrategyListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  failedLoginAttempt?: FloatNullableFilter;
  failedLoginTime?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  isLocked?: BooleanNullableFilter;
  isRemoved?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  phone?: StringFilter;
  userAuthenticationStrategies?: UserAuthenticationStrategyListRelationFilter;
  username?: StringFilter;
};
