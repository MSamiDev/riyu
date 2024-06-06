import { Module } from "@nestjs/common";
import { AppointmentModuleBase } from "./base/appointment.module.base";
import { AppointmentService } from "./appointment.service";
import { AppointmentController } from "./appointment.controller";

@Module({
  imports: [AppointmentModuleBase],
  controllers: [AppointmentController],
  providers: [AppointmentService],
  exports: [AppointmentService],
})
export class AppointmentModule {}
