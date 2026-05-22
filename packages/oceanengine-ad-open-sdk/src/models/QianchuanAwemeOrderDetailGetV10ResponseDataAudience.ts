// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAwemeOrderDetailGetV10DataAudienceAge, QianchuanAwemeOrderDetailGetV10DataAudienceAudienceMode, QianchuanAwemeOrderDetailGetV10DataAudienceAwemeFanBehaviors, QianchuanAwemeOrderDetailGetV10DataAudienceDistrict, QianchuanAwemeOrderDetailGetV10DataAudienceExcludeLimitedRegion, QianchuanAwemeOrderDetailGetV10DataAudienceGender } from "../models";

export interface QianchuanAwemeOrderDetailGetV10ResponseDataAudience {
  age?: QianchuanAwemeOrderDetailGetV10DataAudienceAge[];
  audience_mode?: QianchuanAwemeOrderDetailGetV10DataAudienceAudienceMode;
  aweme_fan_accounts?: number[];
  aweme_fan_behaviors?: QianchuanAwemeOrderDetailGetV10DataAudienceAwemeFanBehaviors[];
  city?: number[];
  district?: QianchuanAwemeOrderDetailGetV10DataAudienceDistrict;
  exclude_limited_region?: QianchuanAwemeOrderDetailGetV10DataAudienceExcludeLimitedRegion;
  gender?: QianchuanAwemeOrderDetailGetV10DataAudienceGender;
  interest_categories?: number[];
  region_version?: string;
}

