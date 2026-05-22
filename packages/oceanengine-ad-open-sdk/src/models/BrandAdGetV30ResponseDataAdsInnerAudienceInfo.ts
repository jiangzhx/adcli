// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { BrandAdGetV30DataAdsAudienceInfoAcV2, BrandAdGetV30DataAdsAudienceInfoBrandSafety, BrandAdGetV30DataAdsAudienceInfoDistrictSplit, BrandAdGetV30DataAdsAudienceInfoDistrictType, BrandAdGetV30DataAdsAudienceInfoExcludeDistrict, BrandAdGetV30DataAdsAudienceInfoPlatformV2, BrandAdGetV30DataAdsAudienceInfoRetargetingType, BrandAdGetV30ResponseDataAdsInnerAudienceInfoGeolocationInner, BrandAdGetV30ResponseDataAdsInnerAudienceInfoRetargetingTagTypeValue } from "../models";

export interface BrandAdGetV30ResponseDataAdsInnerAudienceInfo {
  ac?: number[];
  ac_v2?: BrandAdGetV30DataAdsAudienceInfoAcV2;
  action_categories?: number[];
  action_categories_level?: string[];
  ad_tag?: number[];
  age?: number[][];
  brand_safety?: BrandAdGetV30DataAdsAudienceInfoBrandSafety;
  business_ids?: number | string[];
  city?: number[];
  content_key_words?: string[];
  display_retargeting_tags?: number[];
  district?: string;
  district_split?: BrandAdGetV30DataAdsAudienceInfoDistrictSplit;
  district_type?: BrandAdGetV30DataAdsAudienceInfoDistrictType;
  entry?: number[];
  exclude_district?: BrandAdGetV30DataAdsAudienceInfoExcludeDistrict;
  gender?: number;
  geolocation?: BrandAdGetV30ResponseDataAdsInnerAudienceInfoGeolocationInner[];
  is_business_split?: number;
  platform?: number[];
  platform_v2?: BrandAdGetV30DataAdsAudienceInfoPlatformV2;
  province?: number[];
  retargeting_tag_type?: Record<string, BrandAdGetV30ResponseDataAdsInnerAudienceInfoRetargetingTagTypeValue>;
  retargeting_tags?: number[];
  retargeting_type?: BrandAdGetV30DataAdsAudienceInfoRetargetingType;
  search_keyword?: string[];
  word_bag_ids?: number | string[];
  word_list?: string[];
}

