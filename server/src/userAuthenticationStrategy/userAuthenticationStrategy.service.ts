import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UserAuthenticationStrategyServiceBase } from "./base/userAuthenticationStrategy.service.base";

@Injectable()
export class UserAuthenticationStrategyService extends UserAuthenticationStrategyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
