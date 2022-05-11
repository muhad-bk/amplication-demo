/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  UserAuthenticationStrategy,
  AuthenticationStrategy,
  User,
} from "@prisma/client";

export class UserAuthenticationStrategyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserAuthenticationStrategyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserAuthenticationStrategyFindManyArgs>
  ): Promise<number> {
    return this.prisma.userAuthenticationStrategy.count(args);
  }

  async findMany<T extends Prisma.UserAuthenticationStrategyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserAuthenticationStrategyFindManyArgs>
  ): Promise<UserAuthenticationStrategy[]> {
    return this.prisma.userAuthenticationStrategy.findMany(args);
  }
  async findOne<T extends Prisma.UserAuthenticationStrategyFindUniqueArgs>(
    args: Prisma.SelectSubset<
      T,
      Prisma.UserAuthenticationStrategyFindUniqueArgs
    >
  ): Promise<UserAuthenticationStrategy | null> {
    return this.prisma.userAuthenticationStrategy.findUnique(args);
  }
  async create<T extends Prisma.UserAuthenticationStrategyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserAuthenticationStrategyCreateArgs>
  ): Promise<UserAuthenticationStrategy> {
    return this.prisma.userAuthenticationStrategy.create<T>(args);
  }
  async update<T extends Prisma.UserAuthenticationStrategyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserAuthenticationStrategyUpdateArgs>
  ): Promise<UserAuthenticationStrategy> {
    return this.prisma.userAuthenticationStrategy.update<T>(args);
  }
  async delete<T extends Prisma.UserAuthenticationStrategyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserAuthenticationStrategyDeleteArgs>
  ): Promise<UserAuthenticationStrategy> {
    return this.prisma.userAuthenticationStrategy.delete(args);
  }

  async getAuthenticationStrategy(
    parentId: string
  ): Promise<AuthenticationStrategy | null> {
    return this.prisma.userAuthenticationStrategy
      .findUnique({
        where: { id: parentId },
      })
      .authenticationStrategy();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.userAuthenticationStrategy
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
