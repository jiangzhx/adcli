import type { CreativeElementsUsage } from "../v3/index";
export interface DeriveDataStruct {
    derive_template_id?: number | string;
    derive_adcreative_template_id_list?: number[];
    creative_elements_usage?: CreativeElementsUsage;
    material_derive_preview_id?: number | string;
}
