import { Module } from "@nestjs/common";
import { UserSubscriptionModuleBase } from "./base/userSubscription.module.base";
import { UserSubscriptionService } from "./userSubscription.service";
import { UserSubscriptionController } from "./userSubscription.controller";

@Module({
  imports: [UserSubscriptionModuleBase],
  controllers: [UserSubscriptionController],
  providers: [UserSubscriptionService],
  exports: [UserSubscriptionService],
})
export class UserSubscriptionModule {}
