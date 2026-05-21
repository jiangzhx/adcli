// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { LocalPromotionRejectReasonGetV30DataListMaterialRejectAuditPlatform, LocalPromotionRejectReasonGetV30DataListMaterialRejectType, LocalPromotionRejectReasonGetV30ResponseDataListInnerMaterialRejectInnerImageMaterialInner, LocalPromotionRejectReasonGetV30ResponseDataListInnerMaterialRejectInnerVideoMaterial } from "../models";

export interface LocalPromotionRejectReasonGetV30ResponseDataListInnerMaterialRejectInner {
  audit_platform?: LocalPromotionRejectReasonGetV30DataListMaterialRejectAuditPlatform;
  content?: string;
  image_material?: LocalPromotionRejectReasonGetV30ResponseDataListInnerMaterialRejectInnerImageMaterialInner[];
  reject_reason?: string[];
  suggestion?: string[];
  type?: LocalPromotionRejectReasonGetV30DataListMaterialRejectType;
  video_material?: LocalPromotionRejectReasonGetV30ResponseDataListInnerMaterialRejectInnerVideoMaterial;
}

