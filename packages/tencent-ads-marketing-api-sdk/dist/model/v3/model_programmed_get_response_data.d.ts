import type { MaterialGroupStruct } from "../v3/index";
export interface ProgrammedGetResponseData {
    account_id?: number | string;
    material_derive_id?: number | string;
    adgroup_id?: number | string;
    material_groups?: MaterialGroupStruct[];
}
