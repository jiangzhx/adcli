// 由 oceanengine/ad_open_sdk_go models/model_reject_material_ai_repair_get_v3_0_filtering.go 生成
// 不要手动编辑。

export interface RejectMaterialAiRepairGetV30Filtering {
  ai_repair_ids?: (number | string)[];
  is_oc?: boolean;
  material_ids?: (number | string)[];
  project_ids?: (number | string)[];
  promotion_ids?: (number | string)[];
  repair_end_time?: string;
  repair_start_time?: string;
}

