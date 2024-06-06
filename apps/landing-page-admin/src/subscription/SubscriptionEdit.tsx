import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";

export const SubscriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="AppointmentsLeft"
          source="appointmentsLeft"
        />
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <TextInput label="PlanName" source="planName" />
        <DateTimeInput label="ValidTill" source="validTill" />
      </SimpleForm>
    </Edit>
  );
};
