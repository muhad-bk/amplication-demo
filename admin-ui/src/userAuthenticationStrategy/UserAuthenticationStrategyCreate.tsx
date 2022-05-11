import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { AuthenticationStrategyTitle } from "../authenticationStrategy/AuthenticationStrategyTitle";
import { UserTitle } from "../user/UserTitle";

export const UserAuthenticationStrategyCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
