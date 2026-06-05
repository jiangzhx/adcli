// 由 oceanengine/ad_open_sdk_go models/model_reject_material_ai_repair_cross_account_get_v3_0_response_data.go 生成
// 不要手动编辑。

import type { RejectMaterialAiRepairCrossAccountGetV30ResponseDataRejectMaterialRelatedRepairTasksInner } from "../models/index";

export interface RejectMaterialAiRepairCrossAccountGetV30ResponseData {
  advertiser_id?: number | string;
  ai_repair_id?: (number | string)[];
  material_id?: number | string;
  reject_material_related_repair_tasks?: RejectMaterialAiRepairCrossAccountGetV30ResponseDataRejectMaterialRelatedRepairTasksInner[];
}

