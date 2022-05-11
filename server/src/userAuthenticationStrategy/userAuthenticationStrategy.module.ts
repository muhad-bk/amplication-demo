import { Module } from "@nestjs/common";
import { UserAuthenticationStrategyModuleBase } from "./base/userAuthenticationStrategy.module.base";
import { UserAuthenticationStrategyService } from "./userAuthenticationStrategy.service";
import { UserAuthenticationStrategyController } from "./userAuthenticationStrategy.controller";
import { UserAuthenticationStrategyResolver } from "./userAuthenticationStrategy.resolver";

@Module({
  imports: [UserAuthenticationStrategyModuleBase],
  controllers: [UserAuthenticationStrategyController],
  providers: [
    UserAuthenticationStrategyService,
    UserAuthenticationStrategyResolver,
  ],
  exports: [UserAuthenticationStrategyService],
})
export class UserAuthenticationStrategyModule {}
