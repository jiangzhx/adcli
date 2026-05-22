import type { DeriveDataVersion, DeriveProductGetStruct } from "../models";
export interface ProgrammedCommponentResultGetResponseData {
    material_derive_id?: number | string;
    derive_data_version?: DeriveDataVersion;
    dynamic_creative_id?: number | string;
    adgroup_id?: number | string;
    list?: DeriveProductGetStruct[];
}
