import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserAuthenticationStrategyService } from "./userAuthenticationStrategy.service";
import { UserAuthenticationStrategyControllerBase } from "./base/userAuthenticationStrategy.controller.base";

@swagger.ApiTags("userAuthenticationStrategies")
@common.Controller("userAuthenticationStrategies")
export class UserAuthenticationStrategyController extends UserAuthenticationStrategyControllerBase {
  constructor(
    protected readonly service: UserAuthenticationStrategyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
