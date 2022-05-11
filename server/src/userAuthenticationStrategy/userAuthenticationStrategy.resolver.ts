import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { UserAuthenticationStrategyResolverBase } from "./base/userAuthenticationStrategy.resolver.base";
import { UserAuthenticationStrategy } from "./base/UserAuthenticationStrategy";
import { UserAuthenticationStrategyService } from "./userAuthenticationStrategy.service";

@graphql.Resolver(() => UserAuthenticationStrategy)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserAuthenticationStrategyResolver extends UserAuthenticationStrategyResolverBase {
  constructor(
    protected readonly service: UserAuthenticationStrategyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
