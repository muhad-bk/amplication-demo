import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PostWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
};
