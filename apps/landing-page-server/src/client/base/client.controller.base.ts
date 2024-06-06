/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ClientService } from "../client.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ClientCreateInput } from "./ClientCreateInput";
import { Client } from "./Client";
import { ClientFindManyArgs } from "./ClientFindManyArgs";
import { ClientWhereUniqueInput } from "./ClientWhereUniqueInput";
import { ClientUpdateInput } from "./ClientUpdateInput";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";
import { SubscriptionFindManyArgs } from "../../subscription/base/SubscriptionFindManyArgs";
import { Subscription } from "../../subscription/base/Subscription";
import { SubscriptionWhereUniqueInput } from "../../subscription/base/SubscriptionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ClientControllerBase {
  constructor(
    protected readonly service: ClientService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Client })
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createClient(@common.Body() data: ClientCreateInput): Promise<Client> {
    return await this.service.createClient({
      data: data,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        password: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Client] })
  @ApiNestedQuery(ClientFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async clients(@common.Req() request: Request): Promise<Client[]> {
    const args = plainToClass(ClientFindManyArgs, request.query);
    return this.service.clients({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        password: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async client(
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Client | null> {
    const result = await this.service.client({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        password: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateClient(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() data: ClientUpdateInput
  ): Promise<Client | null> {
    try {
      return await this.service.updateClient({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          password: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteClient(
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Client | null> {
    try {
      return await this.service.deleteClient({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          password: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/appointments")
  @ApiNestedQuery(AppointmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "any",
  })
  async findAppointments(
    @common.Req() request: Request,
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Appointment[]> {
    const query = plainToClass(AppointmentFindManyArgs, request.query);
    const results = await this.service.findAppointments(params.id, {
      ...query,
      select: {
        admin: true,

        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/appointments")
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "update",
    possession: "any",
  })
  async connectAppointments(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        connect: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appointments")
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "update",
    possession: "any",
  })
  async updateAppointments(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        set: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appointments")
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "update",
    possession: "any",
  })
  async disconnectAppointments(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        disconnect: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/subscriptions")
  @ApiNestedQuery(SubscriptionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "read",
    possession: "any",
  })
  async findSubscriptions(
    @common.Req() request: Request,
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Subscription[]> {
    const query = plainToClass(SubscriptionFindManyArgs, request.query);
    const results = await this.service.findSubscriptions(params.id, {
      ...query,
      select: {
        appointmentsLeft: true,

        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        planName: true,
        updatedAt: true,
        validTill: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/subscriptions")
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "update",
    possession: "any",
  })
  async connectSubscriptions(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: SubscriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subscriptions: {
        connect: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/subscriptions")
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "update",
    possession: "any",
  })
  async updateSubscriptions(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: SubscriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subscriptions: {
        set: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/subscriptions")
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "update",
    possession: "any",
  })
  async disconnectSubscriptions(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: SubscriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subscriptions: {
        disconnect: body,
      },
    };
    await this.service.updateClient({
      where: params,
      data,
      select: { id: true },
    });
  }
}