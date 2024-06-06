import { Client } from "../client/Client";

export type Subscription = {
  appointmentsLeft: number | null;
  client?: Client | null;
  createdAt: Date;
  id: string;
  planName: string | null;
  updatedAt: Date;
  validTill: Date | null;
};
