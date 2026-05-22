import type { DeriveDataStruct } from "../v3/index";
export interface MaterialDeriveInfoStruct {
    original_material_id_list?: string[];
    original_adcreative_template_id_list?: number[];
    original_cover_image_id?: string;
    derive_data_list?: DeriveDataStruct[];
}
