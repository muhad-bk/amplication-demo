import { Module } from "@nestjs/common";
import { AuthenticationStrategyModuleBase } from "./base/authenticationStrategy.module.base";
import { AuthenticationStrategyService } from "./authenticationStrategy.service";
import { AuthenticationStrategyController } from "./authenticationStrategy.controller";
import { AuthenticationStrategyResolver } from "./authenticationStrategy.resolver";

@Module({
  imports: [AuthenticationStrategyModuleBase],
  controllers: [AuthenticationStrategyController],
  providers: [AuthenticationStrategyService, AuthenticationStrategyResolver],
  exports: [AuthenticationStrategyService],
})
export class AuthenticationStrategyModule {}
