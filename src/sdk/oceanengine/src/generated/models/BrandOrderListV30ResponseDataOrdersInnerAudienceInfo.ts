// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { BrandOrderListV30DataOrdersAudienceInfoAc, BrandOrderListV30DataOrdersAudienceInfoAdditionalTargeting, BrandOrderListV30DataOrdersAudienceInfoAges, BrandOrderListV30DataOrdersAudienceInfoGender, BrandOrderListV30DataOrdersAudienceInfoIsRealTimeContextTarget, BrandOrderListV30DataOrdersAudienceInfoPlatform, BrandOrderListV30ResponseDataOrdersInnerAudienceInfoDistrictInfo, BrandOrderListV30ResponseDataOrdersInnerAudienceInfoRetargetingInfo } from "../models";

export interface BrandOrderListV30ResponseDataOrdersInnerAudienceInfo {
  ac?: BrandOrderListV30DataOrdersAudienceInfoAc;
  action_categories?: number[];
  additional_targeting?: BrandOrderListV30DataOrdersAudienceInfoAdditionalTargeting;
  ages?: BrandOrderListV30DataOrdersAudienceInfoAges[];
  auto_extend_targets?: string[];
  chase_brand_list?: string[];
  chase_category_list?: string[];
  district_info?: BrandOrderListV30ResponseDataOrdersInnerAudienceInfoDistrictInfo;
  gender?: BrandOrderListV30DataOrdersAudienceInfoGender;
  hot_spot_event_list?: unknown[];
  is_real_time_context_target?: BrandOrderListV30DataOrdersAudienceInfoIsRealTimeContextTarget;
  platform?: BrandOrderListV30DataOrdersAudienceInfoPlatform;
  retargeting_info?: BrandOrderListV30ResponseDataOrdersInnerAudienceInfoRetargetingInfo;
}

