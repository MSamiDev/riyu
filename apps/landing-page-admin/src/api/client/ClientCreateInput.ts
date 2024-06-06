import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";
import { SubscriptionCreateNestedManyWithoutClientsInput } from "./SubscriptionCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutClientsInput;
  username?: string | null;
};
