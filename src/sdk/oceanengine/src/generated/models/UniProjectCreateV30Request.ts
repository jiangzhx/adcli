// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { UniProjectCreateV30AigcDynamicCreativeSwitch, UniProjectCreateV30DeliveryProduct, UniProjectCreateV30MonetizationMode, UniProjectCreateV30RequestAudience, UniProjectCreateV30RequestBrandInfo, UniProjectCreateV30RequestInternalAdvertiserInfo, UniProjectCreateV30RequestPlayletSeriesUrlInfoInner, UniProjectCreateV30RequestProductInfo, UniProjectCreateV30RequestRelatedProduct, UniProjectCreateV30RequestTitleMaterialListInner, UniProjectCreateV30RequestVideoMaterialListInner, UniProjectCreateV30ScheduleType } from "../models";

export interface UniProjectCreateV30Request {
  advertiser_id: number;
  aigc_dynamic_creative_switch?: UniProjectCreateV30AigcDynamicCreativeSwitch;
  audience?: UniProjectCreateV30RequestAudience;
  aweme_id?: string;
  brand_info?: UniProjectCreateV30RequestBrandInfo;
  budget?: number;
  call_to_action_buttons?: string[];
  delivery_product: UniProjectCreateV30DeliveryProduct;
  end_time?: string;
  internal_advertiser_info?: UniProjectCreateV30RequestInternalAdvertiserInfo;
  monetization_mode: UniProjectCreateV30MonetizationMode;
  name: string;
  playlet_series_url_info?: UniProjectCreateV30RequestPlayletSeriesUrlInfoInner[];
  product_info?: UniProjectCreateV30RequestProductInfo;
  related_product?: UniProjectCreateV30RequestRelatedProduct;
  schedule_time?: string;
  schedule_type: UniProjectCreateV30ScheduleType;
  source: string;
  start_time?: string;
  title_material_list?: UniProjectCreateV30RequestTitleMaterialListInner[];
  uni_roi_goal: number;
  video_material_list?: UniProjectCreateV30RequestVideoMaterialListInner[];
}

