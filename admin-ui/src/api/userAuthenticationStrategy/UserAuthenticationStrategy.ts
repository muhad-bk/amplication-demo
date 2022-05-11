import { AuthenticationStrategy } from "../authenticationStrategy/AuthenticationStrategy";
import { User } from "../user/User";

export type UserAuthenticationStrategy = {
  authenticationStrategy?: AuthenticationStrategy | null;
  createdAt: Date;
  expiresWithin: string | null;
  externalIdentifier: string | null;
  id: string;
  isActive: boolean | null;
  isRemoved: boolean | null;
  passwordHash: string | null;
  passwordResetToken: string | null;
  updatedAt: Date;
  user?: User | null;
  verificationToken: string | null;
};
