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

import { AUTHENTICATIONSTRATEGY_TITLE_FIELD } from "./AuthenticationStrategyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AuthenticationStrategyShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <BooleanField label="isRemoved" source="isRemoved" />
        <TextField label="provider" source="provider" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="UserAuthenticationStrategy"
          target="AuthenticationStrategyId"
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
