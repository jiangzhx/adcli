// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdUpdateV10AudienceAc, QianchuanAdUpdateV10AudienceActionDays, QianchuanAdUpdateV10AudienceActionScene, QianchuanAdUpdateV10AudienceAge, QianchuanAdUpdateV10AudienceAudienceMode, QianchuanAdUpdateV10AudienceAutoExtendEnabled, QianchuanAdUpdateV10AudienceAutoExtendTargets, QianchuanAdUpdateV10AudienceAwemeFanBehaviors, QianchuanAdUpdateV10AudienceAwemeFanBehaviorsDays, QianchuanAdUpdateV10AudienceDistrict, QianchuanAdUpdateV10AudienceElectricFenceRegion, QianchuanAdUpdateV10AudienceExcludeLimitedRegion, QianchuanAdUpdateV10AudienceGender, QianchuanAdUpdateV10AudienceLivePlatformTags, QianchuanAdUpdateV10AudienceLocationType, QianchuanAdUpdateV10AudienceNewCustomer, QianchuanAdUpdateV10AudiencePlatform, QianchuanAdUpdateV10AudienceSearchExtended, QianchuanAdUpdateV10AudienceSmartInterestAction } from "../models";

export interface QianchuanAdUpdateV10RequestAudience {
  ac?: QianchuanAdUpdateV10AudienceAc[];
  action_categories?: number[];
  action_days?: QianchuanAdUpdateV10AudienceActionDays;
  action_scene?: QianchuanAdUpdateV10AudienceActionScene[];
  action_words?: number[];
  age?: QianchuanAdUpdateV10AudienceAge[];
  audience_mode?: QianchuanAdUpdateV10AudienceAudienceMode;
  auto_extend_enabled?: QianchuanAdUpdateV10AudienceAutoExtendEnabled;
  auto_extend_targets?: QianchuanAdUpdateV10AudienceAutoExtendTargets[];
  aweme_fan_accounts?: number[];
  aweme_fan_behaviors?: QianchuanAdUpdateV10AudienceAwemeFanBehaviors[];
  aweme_fan_behaviors_days?: QianchuanAdUpdateV10AudienceAwemeFanBehaviorsDays;
  aweme_fan_categories?: number[];
  city?: number[];
  district?: QianchuanAdUpdateV10AudienceDistrict;
  district_type?: boolean;
  electric_fence_region?: QianchuanAdUpdateV10AudienceElectricFenceRegion;
  exclude_limited_region?: QianchuanAdUpdateV10AudienceExcludeLimitedRegion;
  gender?: QianchuanAdUpdateV10AudienceGender;
  interest_categories?: number[];
  interest_words?: number[];
  live_platform_tags?: QianchuanAdUpdateV10AudienceLivePlatformTags[];
  location_type?: QianchuanAdUpdateV10AudienceLocationType;
  new_customer?: QianchuanAdUpdateV10AudienceNewCustomer;
  orientation_id?: number;
  platform?: QianchuanAdUpdateV10AudiencePlatform[];
  region_version?: string;
  retargeting_tags_exclude?: number[];
  retargeting_tags_include?: number[];
  search_extended?: QianchuanAdUpdateV10AudienceSearchExtended;
  smart_interest_action?: QianchuanAdUpdateV10AudienceSmartInterestAction;
}

