// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_preview_item_struct.go
// Do not edit manually.

import type { TargetCreativeTemplateDimension } from "../v3/index";

export interface PreviewItemStruct {
  material_preview_id?: number | string;
  target_creative_template_dimension?: TargetCreativeTemplateDimension;
  template_id?: number | string;
  type?: string;
  template_preview_url?: string;
  recommend_templates?: number[];
}

