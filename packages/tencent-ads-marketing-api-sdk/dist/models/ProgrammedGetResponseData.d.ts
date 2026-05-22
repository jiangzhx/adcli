import type { MaterialGroupStruct } from "../models";
export interface ProgrammedGetResponseData {
    account_id?: number | string;
    material_derive_id?: number | string;
    adgroup_id?: number | string;
    material_groups?: MaterialGroupStruct[];
}
