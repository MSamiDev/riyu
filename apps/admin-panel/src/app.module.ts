import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { UserSubscriptionModule } from "./userSubscription/userSubscription.module";
import { BlogModule } from "./blog/blog.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [],
  imports: [
    UserModule,
    AppointmentModule,
    SubscriptionModule,
    UserSubscriptionModule,
    BlogModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
