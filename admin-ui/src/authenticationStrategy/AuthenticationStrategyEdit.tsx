import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserAuthenticationStrategyTitle } from "../userAuthenticationStrategy/UserAuthenticationStrategyTitle";

export const AuthenticationStrategyEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
