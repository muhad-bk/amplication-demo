import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserAuthenticationStrategyTitle } from "../userAuthenticationStrategy/UserAuthenticationStrategyTitle";

export const AuthenticationStrategyCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="isActive" source="isActive" />
        <BooleanInput label="isRemoved" source="isRemoved" />
        <TextInput label="provider" source="provider" />
        <ReferenceArrayInput
          source="userAuthenticationStrategies"
          reference="UserAuthenticationStrategy"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserAuthenticationStrategyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
