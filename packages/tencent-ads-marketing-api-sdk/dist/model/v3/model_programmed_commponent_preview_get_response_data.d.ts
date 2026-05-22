import type { DeriveDataVersion, RspComponentGroupStruct } from "../v3/index";
export interface ProgrammedCommponentPreviewGetResponseData {
    account_id?: number | string;
    material_derive_id?: number | string;
    derive_data_version?: DeriveDataVersion;
    component_group_list?: RspComponentGroupStruct[];
}
