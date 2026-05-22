// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanUniPromotionAdSuggestionV10DataListAuditPlatform, QianchuanUniPromotionAdSuggestionV10ResponseDataListInnerImageMaterial, QianchuanUniPromotionAdSuggestionV10ResponseDataListInnerVideoMaterial } from "../models";

export interface QianchuanUniPromotionAdSuggestionV10ResponseDataListInner {
  audit_platform?: QianchuanUniPromotionAdSuggestionV10DataListAuditPlatform;
  audit_reason?: string[];
  desc?: string;
  image_material?: QianchuanUniPromotionAdSuggestionV10ResponseDataListInnerImageMaterial;
  is_aweme_video_title?: boolean;
  material_id?: number | string;
  product_id?: number | string;
  related_video_material_id?: number | string;
  video_material?: QianchuanUniPromotionAdSuggestionV10ResponseDataListInnerVideoMaterial;
}

