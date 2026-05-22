// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_aweme_estimate_profit_v1_0_audience.go
// Do not edit manually.

import type { QianchuanAwemeEstimateProfitV10AudienceAge, QianchuanAwemeEstimateProfitV10AudienceAudienceMode, QianchuanAwemeEstimateProfitV10AudienceBehaviors, QianchuanAwemeEstimateProfitV10AudienceDistrict, QianchuanAwemeEstimateProfitV10AudienceExcludeLimitedRegion, QianchuanAwemeEstimateProfitV10AudienceGender } from "../models/index";

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

