import { Module } from "@nestjs/common";
import { SubscriptionModuleBase } from "./base/subscription.module.base";
import { SubscriptionService } from "./subscription.service";
import { SubscriptionController } from "./subscription.controller";

@Module({
  imports: [SubscriptionModuleBase],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
