import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { AUTHENTICATIONSTRATEGY_TITLE_FIELD } from "../authenticationStrategy/AuthenticationStrategyTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="failedLoginAttempt" source="failedLoginAttempt" />
        <TextField label="failedLoginTime" source="failedLoginTime" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <BooleanField label="isLocked" source="isLocked" />
        <BooleanField label="isRemoved" source="isRemoved" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="phone" source="phone" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="UserAuthenticationStrategy"
          target="UserId"
          label="UserAuthenticationStrategies"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AuthenticationStrategy"
              source="authenticationstrategy.id"
              reference="AuthenticationStrategy"
            >
              <TextField source={AUTHENTICATIONSTRATEGY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="expiresWithin" source="expiresWithin" />
            <TextField label="externalIdentifier" source="externalIdentifier" />
            <TextField label="ID" source="id" />
            <BooleanField label="isActive" source="isActive" />
            <BooleanField label="isRemoved" source="isRemoved" />
            <TextField label="passwordHash" source="passwordHash" />
            <TextField label="passwordResetToken" source="passwordResetToken" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="verificationToken" source="verificationToken" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
