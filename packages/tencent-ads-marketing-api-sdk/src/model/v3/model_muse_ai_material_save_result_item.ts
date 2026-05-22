// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_muse_ai_material_save_result_item.go
// Do not edit manually.

import type { MuseAiMaterialPushStatus, TemplateType } from "../v3/index";

export interface MuseAiMaterialSaveResultItem {
  status?: MuseAiMaterialPushStatus;
  muse_material_id?: number | string;
  media_id?: string;
  material_type?: TemplateType;
}

