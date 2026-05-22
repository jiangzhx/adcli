// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanAwemeOrderCreateV10AudienceAge, QianchuanAwemeOrderCreateV10AudienceAudienceMode, QianchuanAwemeOrderCreateV10AudienceBehaviors, QianchuanAwemeOrderCreateV10AudienceDistrict, QianchuanAwemeOrderCreateV10AudienceExcludeLimitedRegion, QianchuanAwemeOrderCreateV10AudienceGender, QianchuanAwemeOrderCreateV10AudienceRegionVersion } from "../models";

export interface QianchuanAwemeOrderCreateV10RequestAudience {
  age?: QianchuanAwemeOrderCreateV10AudienceAge[];
  audience_mode: QianchuanAwemeOrderCreateV10AudienceAudienceMode;
  author_ids?: number[];
  behaviors?: QianchuanAwemeOrderCreateV10AudienceBehaviors[];
  city?: number[];
  district?: QianchuanAwemeOrderCreateV10AudienceDistrict;
  exclude_limited_region?: QianchuanAwemeOrderCreateV10AudienceExcludeLimitedRegion;
  gender?: QianchuanAwemeOrderCreateV10AudienceGender;
  interest_categories?: number[];
  region_version?: QianchuanAwemeOrderCreateV10AudienceRegionVersion;
}

