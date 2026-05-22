// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { BrandOrderUpdateV30AudienceInfoAc, BrandOrderUpdateV30AudienceInfoAges, BrandOrderUpdateV30AudienceInfoGender, BrandOrderUpdateV30AudienceInfoPlatform, BrandOrderUpdateV30RequestAudienceInfoDistrictInfo, BrandOrderUpdateV30RequestAudienceInfoRetargetingInfo } from "../models";

export interface BrandOrderUpdateV30RequestAudienceInfo {
  ac?: BrandOrderUpdateV30AudienceInfoAc;
  ages?: BrandOrderUpdateV30AudienceInfoAges[];
  district_info?: BrandOrderUpdateV30RequestAudienceInfoDistrictInfo;
  gender?: BrandOrderUpdateV30AudienceInfoGender;
  platform?: BrandOrderUpdateV30AudienceInfoPlatform;
  retargeting_info?: BrandOrderUpdateV30RequestAudienceInfoRetargetingInfo;
}

