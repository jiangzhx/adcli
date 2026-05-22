import type { AdMetadataStruct, MaterialGroupCreateStruct } from "../model/index";
export interface ProgrammedAddRequest {
    account_id?: number | string;
    ad_metadata?: AdMetadataStruct;
    auto_derived_program_creative_switch?: boolean;
    standard_switch?: boolean;
    create_material_groups?: MaterialGroupCreateStruct[];
}
