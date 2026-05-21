// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanToolsEstimateAudienceV10AudienceAc, QianchuanToolsEstimateAudienceV10AudienceActionDays, QianchuanToolsEstimateAudienceV10AudienceActionScene, QianchuanToolsEstimateAudienceV10AudienceAge, QianchuanToolsEstimateAudienceV10AudienceAudienceMode, QianchuanToolsEstimateAudienceV10AudienceAutoExtendEnabled, QianchuanToolsEstimateAudienceV10AudienceAutoExtendTargets, QianchuanToolsEstimateAudienceV10AudienceAwemeFanBehaviors, QianchuanToolsEstimateAudienceV10AudienceAwemeFanBehaviorsDays, QianchuanToolsEstimateAudienceV10AudienceDistrict, QianchuanToolsEstimateAudienceV10AudienceExcludeLimitedRegion, QianchuanToolsEstimateAudienceV10AudienceGender, QianchuanToolsEstimateAudienceV10AudienceLivePlatformTags, QianchuanToolsEstimateAudienceV10AudienceLocationType, QianchuanToolsEstimateAudienceV10AudienceNewCustomer, QianchuanToolsEstimateAudienceV10AudiencePlatform, QianchuanToolsEstimateAudienceV10AudienceSmartInterestAction } from "../models";

export interface QianchuanToolsEstimateAudienceV10Audience {
  ac?: QianchuanToolsEstimateAudienceV10AudienceAc[];
  action_categories?: number[];
  action_days?: QianchuanToolsEstimateAudienceV10AudienceActionDays;
  action_scene?: QianchuanToolsEstimateAudienceV10AudienceActionScene[];
  action_words?: number[];
  age?: QianchuanToolsEstimateAudienceV10AudienceAge[];
  audience_mode?: QianchuanToolsEstimateAudienceV10AudienceAudienceMode;
  auto_extend_enabled?: QianchuanToolsEstimateAudienceV10AudienceAutoExtendEnabled;
  auto_extend_targets?: QianchuanToolsEstimateAudienceV10AudienceAutoExtendTargets[];
  aweme_fan_accounts?: number[];
  aweme_fan_behaviors?: QianchuanToolsEstimateAudienceV10AudienceAwemeFanBehaviors[];
  aweme_fan_behaviors_days?: QianchuanToolsEstimateAudienceV10AudienceAwemeFanBehaviorsDays;
  aweme_fan_categories?: number[];
  city?: number[];
  district?: QianchuanToolsEstimateAudienceV10AudienceDistrict;
  district_type?: boolean;
  exclude_limited_region?: QianchuanToolsEstimateAudienceV10AudienceExcludeLimitedRegion;
  gender?: QianchuanToolsEstimateAudienceV10AudienceGender;
  interest_categories?: number[];
  interest_words?: number[];
  live_platform_tags?: QianchuanToolsEstimateAudienceV10AudienceLivePlatformTags[];
  location_type?: QianchuanToolsEstimateAudienceV10AudienceLocationType;
  new_customer?: QianchuanToolsEstimateAudienceV10AudienceNewCustomer;
  orientation_id?: number;
  platform?: QianchuanToolsEstimateAudienceV10AudiencePlatform[];
  retargeting_tags_exclude?: number[];
  retargeting_tags_include?: number[];
  smart_interest_action?: QianchuanToolsEstimateAudienceV10AudienceSmartInterestAction;
}

