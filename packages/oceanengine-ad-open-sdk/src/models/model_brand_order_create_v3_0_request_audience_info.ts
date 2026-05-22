// Generated from oceanengine/ad_open_sdk_go models/model_brand_order_create_v3_0_request_audience_info.go
// Do not edit manually.

import type { BrandOrderCreateV30AudienceInfoAc, BrandOrderCreateV30AudienceInfoAges, BrandOrderCreateV30AudienceInfoGender, BrandOrderCreateV30AudienceInfoPlatform, BrandOrderCreateV30RequestAudienceInfoDistrictInfo, BrandOrderCreateV30RequestAudienceInfoRetargetingInfo } from "../models/index";

export interface BrandOrderCreateV30RequestAudienceInfo {
  ac?: BrandOrderCreateV30AudienceInfoAc;
  ages?: BrandOrderCreateV30AudienceInfoAges[];
  district_info?: BrandOrderCreateV30RequestAudienceInfoDistrictInfo;
  gender?: BrandOrderCreateV30AudienceInfoGender;
  platform?: BrandOrderCreateV30AudienceInfoPlatform;
  retargeting_info?: BrandOrderCreateV30RequestAudienceInfoRetargetingInfo;
}

