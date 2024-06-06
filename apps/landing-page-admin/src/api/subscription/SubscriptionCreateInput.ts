import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type SubscriptionCreateInput = {
  appointmentsLeft?: number | null;
  client?: ClientWhereUniqueInput | null;
  planName?: string | null;
  validTill?: Date | null;
};
