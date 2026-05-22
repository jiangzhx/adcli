import type { UserActionSetType } from "../models";
export interface UserActionSetStruct {
    type?: UserActionSetType;
    id?: number | string;
    data_source_id?: number | string;
}
