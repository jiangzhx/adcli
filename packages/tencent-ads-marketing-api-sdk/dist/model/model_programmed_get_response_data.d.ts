import type { AdMetadataStruct, MaterialGroupStruct } from "../model/index";
export interface ProgrammedGetResponseData {
    account_id?: number | string;
    material_derive_id?: number | string;
    ad_metadata?: AdMetadataStruct;
    material_groups?: MaterialGroupStruct[];
}
