import type { ComponentGroupStruct } from "../models";
export interface ProgrammedCommponentPreviewAddRequest {
    account_id?: number | string;
    adgroup_id?: number | string;
    component_group_list?: ComponentGroupStruct[];
}
