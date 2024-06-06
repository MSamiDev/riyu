import { Client } from "../client/Client";

export type Appointment = {
  admin: string | null;
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
