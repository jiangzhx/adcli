// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAwemeEstimateProfitV10AudienceAge, QianchuanAwemeEstimateProfitV10AudienceAudienceMode, QianchuanAwemeEstimateProfitV10AudienceBehaviors, QianchuanAwemeEstimateProfitV10AudienceDistrict, QianchuanAwemeEstimateProfitV10AudienceExcludeLimitedRegion, QianchuanAwemeEstimateProfitV10AudienceGender } from "../models";

export interface QianchuanAwemeEstimateProfitV10Audience {
  age?: QianchuanAwemeEstimateProfitV10AudienceAge[];
  audience_mode: QianchuanAwemeEstimateProfitV10AudienceAudienceMode;
  author_ids?: number | string[];
  behaviors?: QianchuanAwemeEstimateProfitV10AudienceBehaviors[];
  city?: number[];
  district?: QianchuanAwemeEstimateProfitV10AudienceDistrict;
  exclude_limited_region?: QianchuanAwemeEstimateProfitV10AudienceExcludeLimitedRegion;
  gender?: QianchuanAwemeEstimateProfitV10AudienceGender;
  interest_categories?: number[];
}

