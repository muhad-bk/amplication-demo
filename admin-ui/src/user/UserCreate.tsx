import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  BooleanInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { UserAuthenticationStrategyTitle } from "../userAuthenticationStrategy/UserAuthenticationStrategyTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <NumberInput label="failedLoginAttempt" source="failedLoginAttempt" />
        <DateTimeInput label="failedLoginTime" source="failedLoginTime" />
        <TextInput label="First Name" source="firstName" />
        <BooleanInput label="isActive" source="isActive" />
        <BooleanInput label="isLocked" source="isLocked" />
        <BooleanInput label="isRemoved" source="isRemoved" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="phone" source="phone" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="userAuthenticationStrategies"
          reference="UserAuthenticationStrategy"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserAuthenticationStrategyTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
