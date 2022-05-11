import { UserAuthenticationStrategy as TUserAuthenticationStrategy } from "../api/userAuthenticationStrategy/UserAuthenticationStrategy";

export const USERAUTHENTICATIONSTRATEGY_TITLE_FIELD = "expiresWithin";

export const UserAuthenticationStrategyTitle = (
  record: TUserAuthenticationStrategy
): string => {
  return record.expiresWithin || record.id;
};
