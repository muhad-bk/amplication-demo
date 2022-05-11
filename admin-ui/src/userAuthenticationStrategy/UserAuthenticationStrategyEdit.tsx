import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { AuthenticationStrategyTitle } from "../authenticationStrategy/AuthenticationStrategyTitle";
import { UserTitle } from "../user/UserTitle";

export const UserAuthenticationStrategyEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="authenticationstrategy.id"
          reference="AuthenticationStrategy"
          label="AuthenticationStrategy"
        >
          <SelectInput optionText={AuthenticationStrategyTitle} />
        </ReferenceInput>
        <TextInput label="expiresWithin" source="expiresWithin" />
        <TextInput label="externalIdentifier" source="externalIdentifier" />
        <BooleanInput label="isActive" source="isActive" />
        <BooleanInput label="isRemoved" source="isRemoved" />
        <TextInput label="passwordHash" source="passwordHash" />
        <TextInput label="passwordResetToken" source="passwordResetToken" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="verificationToken" source="verificationToken" />
      </SimpleForm>
    </Edit>
  );
};
