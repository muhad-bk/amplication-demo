import { AuthenticationStrategyWhereUniqueInput } from "../authenticationStrategy/AuthenticationStrategyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAuthenticationStrategyWhereInput = {
  authenticationStrategy?: AuthenticationStrategyWhereUniqueInput;
  expiresWithin?: StringNullableFilter;
  externalIdentifier?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  isRemoved?: BooleanNullableFilter;
  passwordHash?: StringNullableFilter;
  passwordResetToken?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  verificationToken?: StringNullableFilter;
};
