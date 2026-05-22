import type { MaterialGroupUpdateStruct } from "../model/index";
export interface ProgrammedUpdateRequest {
    account_id?: number | string;
    material_derive_id?: number | string;
    auto_derived_program_creative_switch?: boolean;
    standard_switch?: boolean;
    update_material_groups?: MaterialGroupUpdateStruct[];
}
