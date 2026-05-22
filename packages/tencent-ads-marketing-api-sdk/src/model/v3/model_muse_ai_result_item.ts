// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_muse_ai_result_item.go
// Do not edit manually.

import type { CaptionResult, TemplateType } from "../v3/index";

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

