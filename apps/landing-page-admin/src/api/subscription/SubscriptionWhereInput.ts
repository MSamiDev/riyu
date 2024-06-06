import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SubscriptionWhereInput = {
  appointmentsLeft?: IntNullableFilter;
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  planName?: StringNullableFilter;
  validTill?: DateTimeNullableFilter;
};
