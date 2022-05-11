import { AuthenticationStrategyWhereUniqueInput } from "../authenticationStrategy/AuthenticationStrategyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAuthenticationStrategyUpdateInput = {
  authenticationStrategy?: AuthenticationStrategyWhereUniqueInput | null;
  expiresWithin?: string | null;
  externalIdentifier?: string | null;
  isActive?: boolean | null;
  isRemoved?: boolean | null;
  passwordHash?: string | null;
  passwordResetToken?: string | null;
  user?: UserWhereUniqueInput | null;
  verificationToken?: string | null;
};
