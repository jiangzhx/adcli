// Generated from oceanengine/ad_open_sdk_go models/model_promotion_reject_reason_get_v3_0_response_data_list_inner_material_reject_inner.go
// Do not edit manually.

import type { PromotionRejectReasonGetV30DataListMaterialRejectAuditPlatform, PromotionRejectReasonGetV30DataListMaterialRejectType } from "../models/index";

export interface PromotionRejectReasonGetV30ResponseDataListInnerMaterialRejectInner {
  audit_platform?: PromotionRejectReasonGetV30DataListMaterialRejectAuditPlatform;
  item?: string;
  lego_mid?: number;
  reject_reason?: string[];
  suggestion?: string[];
  type?: PromotionRejectReasonGetV30DataListMaterialRejectType;
}

