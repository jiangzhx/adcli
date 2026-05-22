import type { EachMaterialItemStruct, ParamSourceType, WatermarkConfigStruct, WatermarkMaterialType } from "../v3/index";
export interface WatermarksAddRequest {
    account_id?: number | string;
    organization_id?: number | string;
    source_type?: ParamSourceType;
    materials?: EachMaterialItemStruct[];
    material_type?: WatermarkMaterialType;
    watermark_configs?: WatermarkConfigStruct[];
}
