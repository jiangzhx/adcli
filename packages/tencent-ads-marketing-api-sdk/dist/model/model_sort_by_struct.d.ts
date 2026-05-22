import type { FieldTypeEnum, Sort } from "../model/index";
export interface SortByStruct {
    field?: FieldTypeEnum;
    desc?: Sort;
}
