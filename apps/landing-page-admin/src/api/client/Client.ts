import { Appointment } from "../appointment/Appointment";
import { Subscription } from "../subscription/Subscription";

export type Client = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  password: string | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
  username: string | null;
};
