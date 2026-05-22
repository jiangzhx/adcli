import type { CaptionResult, TemplateType } from "../models";
export interface MuseAiResultItem {
    muse_material_id?: number | string;
    material_type?: TemplateType;
    ratio_width?: number;
    ratio_height?: number;
    width?: number;
    height?: number;
    url?: string;
    caption_result?: CaptionResult;
}
