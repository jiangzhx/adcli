// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { PromotionUpdateV30AutoExtendTraffic, PromotionUpdateV30CreativeAutoGenerateSwitch, PromotionUpdateV30IsCommentDisable, PromotionUpdateV30MaterialsType, PromotionUpdateV30RequestBrandInfo, PromotionUpdateV30RequestKeywordsInner, PromotionUpdateV30RequestNativeSetting, PromotionUpdateV30RequestPromotionMaterials, PromotionUpdateV30RequestPromotionRelatedProductInner, PromotionUpdateV30RequestShopMultiRoiGoalsInner } from "../models";

export interface PromotionUpdateV30Request {
  "7d_retention"?: number;
  advertiser_id: number;
  auto_extend_traffic?: PromotionUpdateV30AutoExtendTraffic;
  bid?: number;
  brand_info?: PromotionUpdateV30RequestBrandInfo;
  budget?: number;
  config_id?: number;
  cpa_bid?: number;
  creative_auto_generate_switch?: PromotionUpdateV30CreativeAutoGenerateSwitch;
  deep_cpabid?: number;
  first_roi_goal?: number;
  is_comment_disable?: PromotionUpdateV30IsCommentDisable;
  keywords?: PromotionUpdateV30RequestKeywordsInner[];
  materials_type?: PromotionUpdateV30MaterialsType;
  name: string;
  native_setting?: PromotionUpdateV30RequestNativeSetting;
  promotion_id: number;
  promotion_materials?: PromotionUpdateV30RequestPromotionMaterials;
  promotion_related_product?: PromotionUpdateV30RequestPromotionRelatedProductInner[];
  roi_goal?: number;
  shop_multi_roi_goals?: PromotionUpdateV30RequestShopMultiRoiGoalsInner[];
  source?: string;
  union_bid_ratio?: number;
}

