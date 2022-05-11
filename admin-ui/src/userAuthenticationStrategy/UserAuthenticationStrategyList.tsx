import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { AUTHENTICATIONSTRATEGY_TITLE_FIELD } from "../authenticationStrategy/AuthenticationStrategyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserAuthenticationStrategyList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserAuthenticationStrategies"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
