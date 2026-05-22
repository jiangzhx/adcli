// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { PromotionCreateV30AdDownloadStatus, PromotionCreateV30AutoExtendTraffic, PromotionCreateV30BudgetMode, PromotionCreateV30CreativeAutoGenerateSwitch, PromotionCreateV30IsCommentDisable, PromotionCreateV30MaterialsType, PromotionCreateV30Operation, PromotionCreateV30RequestBrandInfo, PromotionCreateV30RequestKeywordsInner, PromotionCreateV30RequestNativeSetting, PromotionCreateV30RequestPromotionMaterials, PromotionCreateV30RequestPromotionRelatedProductInner } from "../models";

export interface PromotionCreateV30Request {
  "7d_retention"?: number;
  ad_download_status?: PromotionCreateV30AdDownloadStatus;
  advertiser_id: number | string;
  auto_extend_traffic?: PromotionCreateV30AutoExtendTraffic;
  bid?: number;
  brand_info?: PromotionCreateV30RequestBrandInfo;
  budget?: number;
  budget_mode?: PromotionCreateV30BudgetMode;
  config_id?: number | string;
  cpa_bid?: number;
  creative_auto_generate_switch?: PromotionCreateV30CreativeAutoGenerateSwitch;
  deep_cpabid?: number;
  first_roi_goal?: number;
  is_comment_disable?: PromotionCreateV30IsCommentDisable;
  keywords?: PromotionCreateV30RequestKeywordsInner[];
  materials_type?: PromotionCreateV30MaterialsType;
  name: string;
  native_setting?: PromotionCreateV30RequestNativeSetting;
  operation?: PromotionCreateV30Operation;
  project_id: number | string;
  promotion_materials?: PromotionCreateV30RequestPromotionMaterials;
  promotion_related_product?: PromotionCreateV30RequestPromotionRelatedProductInner[];
  roi_goal?: number;
  source?: string;
  union_bid_ratio?: number;
}

