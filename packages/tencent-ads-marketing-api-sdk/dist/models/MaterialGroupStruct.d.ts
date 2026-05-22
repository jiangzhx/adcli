import type { DimensionStruct, MaterialStruct, PreviewStruct, RecommendTemplateStruct, TemplateType } from "../models";
export interface MaterialGroupStruct {
    material_group_id?: number | string;
    ratio?: string;
    material_type?: TemplateType;
    materials?: MaterialStruct[];
    original_creative_templates?: DimensionStruct[];
    target_creative_templates?: DimensionStruct[];
    previews?: PreviewStruct[];
    recommend_templates?: RecommendTemplateStruct[];
}
