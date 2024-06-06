import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  admin?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
