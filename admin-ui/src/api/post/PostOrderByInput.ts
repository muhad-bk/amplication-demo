import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
