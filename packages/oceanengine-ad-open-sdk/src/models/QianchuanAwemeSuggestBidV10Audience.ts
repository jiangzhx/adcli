// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAwemeSuggestBidV10AudienceAge, QianchuanAwemeSuggestBidV10AudienceAudienceMode, QianchuanAwemeSuggestBidV10AudienceDistrict, QianchuanAwemeSuggestBidV10AudienceExcludeLimitedRegion, QianchuanAwemeSuggestBidV10AudienceGender } from "../models";

export interface QianchuanAwemeSuggestBidV10Audience {
  age?: QianchuanAwemeSuggestBidV10AudienceAge[];
  audience_mode: QianchuanAwemeSuggestBidV10AudienceAudienceMode;
  author_ids?: number | string[];
  city?: number[];
  district?: QianchuanAwemeSuggestBidV10AudienceDistrict;
  exclude_limited_region?: QianchuanAwemeSuggestBidV10AudienceExcludeLimitedRegion;
  gender?: QianchuanAwemeSuggestBidV10AudienceGender;
  interest_categories?: number[];
}

