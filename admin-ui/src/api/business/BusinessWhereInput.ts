import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type BusinessWhereInput = {
  id?: StringFilter;
  name?: IntFilter;
};
