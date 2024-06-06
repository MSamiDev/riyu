import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";
import { SubscriptionUpdateManyWithoutClientsInput } from "./SubscriptionUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string | null;
  subscriptions?: SubscriptionUpdateManyWithoutClientsInput;
  username?: string | null;
};
