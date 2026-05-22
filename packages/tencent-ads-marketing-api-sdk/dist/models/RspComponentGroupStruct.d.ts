import type { PreviewItemStruct } from "../models";
export interface RspComponentGroupStruct {
    component_id?: number | string;
    component_type?: string;
    original_creative_template_id_list?: number[];
    supported_target_creative_template_id_list?: number[];
    previews?: PreviewItemStruct[];
}
