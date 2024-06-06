import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type SubscriptionUpdateInput = {
  appointmentsLeft?: number | null;
  client?: ClientWhereUniqueInput | null;
  planName?: string | null;
  validTill?: Date | null;
};
