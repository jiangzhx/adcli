// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { PromotionRejectReasonGetV30DataListMaterialRejectAuditPlatform, PromotionRejectReasonGetV30DataListMaterialRejectType } from "../models";

export interface PromotionRejectReasonGetV30ResponseDataListInnerMaterialRejectInner {
  audit_platform?: PromotionRejectReasonGetV30DataListMaterialRejectAuditPlatform;
  item?: string;
  lego_mid?: number;
  reject_reason?: string[];
  suggestion?: string[];
  type?: PromotionRejectReasonGetV30DataListMaterialRejectType;
}

