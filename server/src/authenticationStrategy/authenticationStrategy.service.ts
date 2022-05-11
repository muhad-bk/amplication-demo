import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AuthenticationStrategyServiceBase } from "./base/authenticationStrategy.service.base";

@Injectable()
export class AuthenticationStrategyService extends AuthenticationStrategyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
