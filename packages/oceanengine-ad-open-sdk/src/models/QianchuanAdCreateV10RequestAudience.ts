// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanAdCreateV10AudienceAc, QianchuanAdCreateV10AudienceActionDays, QianchuanAdCreateV10AudienceActionScene, QianchuanAdCreateV10AudienceAge, QianchuanAdCreateV10AudienceAudienceMode, QianchuanAdCreateV10AudienceAutoExtendEnabled, QianchuanAdCreateV10AudienceAutoExtendTargets, QianchuanAdCreateV10AudienceAwemeFanBehaviors, QianchuanAdCreateV10AudienceAwemeFanBehaviorsDays, QianchuanAdCreateV10AudienceDistrict, QianchuanAdCreateV10AudienceElectricFenceRegion, QianchuanAdCreateV10AudienceExcludeLimitedRegion, QianchuanAdCreateV10AudienceGender, QianchuanAdCreateV10AudienceLivePlatformTags, QianchuanAdCreateV10AudienceLocationType, QianchuanAdCreateV10AudienceNewCustomer, QianchuanAdCreateV10AudiencePlatform, QianchuanAdCreateV10AudienceSearchExtended, QianchuanAdCreateV10AudienceSmartInterestAction } from "../models";

export interface QianchuanAdCreateV10RequestAudience {
  ac?: QianchuanAdCreateV10AudienceAc[];
  action_categories?: number[];
  action_days?: QianchuanAdCreateV10AudienceActionDays;
  action_scene?: QianchuanAdCreateV10AudienceActionScene[];
  action_words?: number[];
  age?: QianchuanAdCreateV10AudienceAge[];
  audience_mode?: QianchuanAdCreateV10AudienceAudienceMode;
  auto_extend_enabled?: QianchuanAdCreateV10AudienceAutoExtendEnabled;
  auto_extend_targets?: QianchuanAdCreateV10AudienceAutoExtendTargets[];
  aweme_fan_accounts?: number[];
  aweme_fan_behaviors?: QianchuanAdCreateV10AudienceAwemeFanBehaviors[];
  aweme_fan_behaviors_days?: QianchuanAdCreateV10AudienceAwemeFanBehaviorsDays;
  aweme_fan_categories?: number[];
  city?: number[];
  district?: QianchuanAdCreateV10AudienceDistrict;
  district_type?: boolean;
  electric_fence_region?: QianchuanAdCreateV10AudienceElectricFenceRegion;
  exclude_limited_region?: QianchuanAdCreateV10AudienceExcludeLimitedRegion;
  gender?: QianchuanAdCreateV10AudienceGender;
  interest_categories?: number[];
  interest_words?: number[];
  live_platform_tags?: QianchuanAdCreateV10AudienceLivePlatformTags[];
  location_type?: QianchuanAdCreateV10AudienceLocationType;
  new_customer?: QianchuanAdCreateV10AudienceNewCustomer;
  orientation_id?: number;
  platform?: QianchuanAdCreateV10AudiencePlatform[];
  region_version?: string;
  retargeting_tags_exclude?: number[];
  retargeting_tags_include?: number[];
  search_extended?: QianchuanAdCreateV10AudienceSearchExtended;
  smart_interest_action?: QianchuanAdCreateV10AudienceSmartInterestAction;
}

