import { AuthenticationStrategy as TAuthenticationStrategy } from "../api/authenticationStrategy/AuthenticationStrategy";

export const AUTHENTICATIONSTRATEGY_TITLE_FIELD = "provider";

export const AuthenticationStrategyTitle = (
  record: TAuthenticationStrategy
): string => {
  return record.provider || record.id;
};
