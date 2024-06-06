import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  appointmentsLeft?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  planName?: SortOrder;
  updatedAt?: SortOrder;
  validTill?: SortOrder;
};
