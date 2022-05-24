import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const BusinessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
