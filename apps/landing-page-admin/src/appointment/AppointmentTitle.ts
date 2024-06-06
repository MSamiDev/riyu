import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "admin";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.admin?.toString() || String(record.id);
};
