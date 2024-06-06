import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentCreateInput = {
  admin?: string | null;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  status?: "Option1" | null;
};
