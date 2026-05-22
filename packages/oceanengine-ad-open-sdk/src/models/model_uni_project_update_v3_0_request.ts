// Generated from oceanengine/ad_open_sdk_go models/model_uni_project_update_v3_0_request.go
// Do not edit manually.

import type { UniProjectUpdateV30AigcDynamicCreativeSwitch, UniProjectUpdateV30MonetizationMode, UniProjectUpdateV30RequestAudience, UniProjectUpdateV30RequestBrandInfo, UniProjectUpdateV30RequestPlayletSeriesUrlInfoInner, UniProjectUpdateV30RequestProductInfo, UniProjectUpdateV30RequestTitleMaterialListInner, UniProjectUpdateV30ScheduleType } from "../models/index";

export interface UniProjectUpdateV30Request {
  advertiser_id: number | string;
  aigc_dynamic_creative_switch?: UniProjectUpdateV30AigcDynamicCreativeSwitch;
  audience?: UniProjectUpdateV30RequestAudience;
  brand_info?: UniProjectUpdateV30RequestBrandInfo;
  budget?: number;
  call_to_action_buttons?: string[];
  end_time?: string;
  monetization_mode?: UniProjectUpdateV30MonetizationMode;
  name?: string;
  playlet_series_url_info?: UniProjectUpdateV30RequestPlayletSeriesUrlInfoInner[];
  product_info?: UniProjectUpdateV30RequestProductInfo;
  project_id: number | string;
  schedule_time?: string;
  schedule_type?: UniProjectUpdateV30ScheduleType;
  source?: string;
  title_material_list?: UniProjectUpdateV30RequestTitleMaterialListInner[];
  uni_roi_goal?: number;
}

