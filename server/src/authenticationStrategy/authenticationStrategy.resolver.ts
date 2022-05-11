import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthenticationStrategyResolverBase } from "./base/authenticationStrategy.resolver.base";
import { AuthenticationStrategy } from "./base/AuthenticationStrategy";
import { AuthenticationStrategyService } from "./authenticationStrategy.service";

@graphql.Resolver(() => AuthenticationStrategy)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AuthenticationStrategyResolver extends AuthenticationStrategyResolverBase {
  constructor(
    protected readonly service: AuthenticationStrategyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
