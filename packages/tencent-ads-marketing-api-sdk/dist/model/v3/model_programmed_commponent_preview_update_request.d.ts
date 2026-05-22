import type { ComponentGroupStruct } from "../v3/index";
export interface ProgrammedCommponentPreviewUpdateRequest {
    account_id?: number | string;
    adgroup_id?: number | string;
    material_derive_id?: number | string;
    component_group_list?: ComponentGroupStruct[];
}
