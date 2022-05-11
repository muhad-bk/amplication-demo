import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { UserAuthenticationStrategyController } from "../userAuthenticationStrategy.controller";
import { UserAuthenticationStrategyService } from "../userAuthenticationStrategy.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  expiresWithin: "exampleExpiresWithin",
  externalIdentifier: "exampleExternalIdentifier",
  id: "exampleId",
  isActive: "true",
  isRemoved: "true",
  passwordHash: "examplePasswordHash",
  passwordResetToken: "examplePasswordResetToken",
  updatedAt: new Date(),
  verificationToken: "exampleVerificationToken",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  expiresWithin: "exampleExpiresWithin",
  externalIdentifier: "exampleExternalIdentifier",
  id: "exampleId",
  isActive: "true",
  isRemoved: "true",
  passwordHash: "examplePasswordHash",
  passwordResetToken: "examplePasswordResetToken",
  updatedAt: new Date(),
  verificationToken: "exampleVerificationToken",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    expiresWithin: "exampleExpiresWithin",
    externalIdentifier: "exampleExternalIdentifier",
    id: "exampleId",
    isActive: "true",
    isRemoved: "true",
    passwordHash: "examplePasswordHash",
    passwordResetToken: "examplePasswordResetToken",
    updatedAt: new Date(),
    verificationToken: "exampleVerificationToken",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  expiresWithin: "exampleExpiresWithin",
  externalIdentifier: "exampleExternalIdentifier",
  id: "exampleId",
  isActive: "true",
  isRemoved: "true",
  passwordHash: "examplePasswordHash",
  passwordResetToken: "examplePasswordResetToken",
  updatedAt: new Date(),
  verificationToken: "exampleVerificationToken",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("UserAuthenticationStrategy", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserAuthenticationStrategyService,
          useValue: service,
        },
      ],
      controllers: [UserAuthenticationStrategyController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /userAuthenticationStrategies", async () => {
    await request(app.getHttpServer())
      .post("/userAuthenticationStrategies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /userAuthenticationStrategies", async () => {
    await request(app.getHttpServer())
      .get("/userAuthenticationStrategies")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /userAuthenticationStrategies/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userAuthenticationStrategies"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userAuthenticationStrategies/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userAuthenticationStrategies"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
