import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AuthenticationStrategyService } from "./authenticationStrategy.service";
import { AuthenticationStrategyControllerBase } from "./base/authenticationStrategy.controller.base";

@swagger.ApiTags("authenticationStrategies")
@common.Controller("authenticationStrategies")
export class AuthenticationStrategyController extends AuthenticationStrategyControllerBase {
  constructor(
    protected readonly service: AuthenticationStrategyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
