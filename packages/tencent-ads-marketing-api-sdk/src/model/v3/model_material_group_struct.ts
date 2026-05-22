// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_material_group_struct.go
// Do not edit manually.

import type { DimensionStruct, MaterialStruct, PreviewStruct, RecommendTemplateStruct, TemplateType } from "../v3/index";

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

