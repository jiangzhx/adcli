// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { UniProjectListGetV30DataListAigcDynamicCreativeSwitch, UniProjectListGetV30DataListMonetizationMode, UniProjectListGetV30DataListPricing, UniProjectListGetV30DataListScheduleType, UniProjectListGetV30DataListStatusFirst, UniProjectListGetV30DataListStatusSecond, UniProjectListGetV30ResponseDataListInnerAudience, UniProjectListGetV30ResponseDataListInnerBrandInfo, UniProjectListGetV30ResponseDataListInnerRelatedProduct } from "../models";

export interface UniProjectListGetV30ResponseDataListInner {
  advertiser_id?: number;
  aigc_dynamic_creative_switch?: UniProjectListGetV30DataListAigcDynamicCreativeSwitch;
  audience?: UniProjectListGetV30ResponseDataListInnerAudience;
  aweme_id?: string;
  brand_info?: UniProjectListGetV30ResponseDataListInnerBrandInfo;
  budget?: number;
  end_time?: string;
  monetization_mode?: UniProjectListGetV30DataListMonetizationMode;
  name?: string;
  pricing?: UniProjectListGetV30DataListPricing;
  project_id?: number;
  related_product?: UniProjectListGetV30ResponseDataListInnerRelatedProduct;
  schedule_time?: string;
  schedule_type?: UniProjectListGetV30DataListScheduleType;
  source?: string;
  start_time?: string;
  status_first?: UniProjectListGetV30DataListStatusFirst;
  status_second?: UniProjectListGetV30DataListStatusSecond[];
  uni_roi_goal?: number;
}

