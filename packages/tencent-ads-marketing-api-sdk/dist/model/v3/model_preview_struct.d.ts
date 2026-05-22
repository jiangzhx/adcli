import type { DimensionStruct } from "../v3/index";
export interface PreviewStruct {
    material_derive_preview_id?: number | string;
    template_id?: number | string;
    template_preview_url?: string;
    template_name?: string;
    dimension?: DimensionStruct;
}
