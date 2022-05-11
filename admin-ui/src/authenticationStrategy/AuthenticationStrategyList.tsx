import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AuthenticationStrategyList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AuthenticationStrategies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <BooleanField label="isRemoved" source="isRemoved" />
        <TextField label="provider" source="provider" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
