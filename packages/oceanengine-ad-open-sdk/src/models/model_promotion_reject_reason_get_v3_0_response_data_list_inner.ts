// 由 oceanengine/ad_open_sdk_go models/model_promotion_reject_reason_get_v3_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { PromotionRejectReasonGetV30ResponseDataListInnerMaterialRejectInner, PromotionRejectReasonGetV30ResponseDataListInnerPromotionRejectInner } from "../models/index";

export interface PromotionRejectReasonGetV30ResponseDataListInner {
  material_reject?: PromotionRejectReasonGetV30ResponseDataListInnerMaterialRejectInner[];
  promotion_id?: number | string;
  promotion_reject?: PromotionRejectReasonGetV30ResponseDataListInnerPromotionRejectInner[];
}

