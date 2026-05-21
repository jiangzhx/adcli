// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanAdDetailGetV10DataAudienceAc, QianchuanAdDetailGetV10DataAudienceActionScene, QianchuanAdDetailGetV10DataAudienceAge, QianchuanAdDetailGetV10DataAudienceAudienceMode, QianchuanAdDetailGetV10DataAudienceAutoExtendTargets, QianchuanAdDetailGetV10DataAudienceAwemeFanBehaviors, QianchuanAdDetailGetV10DataAudienceAwemeFanBehaviorsDays, QianchuanAdDetailGetV10DataAudienceDistrict, QianchuanAdDetailGetV10DataAudienceElectricFenceRegion, QianchuanAdDetailGetV10DataAudienceGender, QianchuanAdDetailGetV10DataAudienceLocationType, QianchuanAdDetailGetV10DataAudienceNewCustomer, QianchuanAdDetailGetV10DataAudiencePlatform, QianchuanAdDetailGetV10DataAudienceSearchExtended, QianchuanAdDetailGetV10DataAudienceSmartInterestAction, QianchuanAdDetailGetV10ResponseDataAudienceInactiveRetargetingTagsInner } from "../models";

export interface QianchuanAdDetailGetV10ResponseDataAudience {
  ac?: QianchuanAdDetailGetV10DataAudienceAc[];
  action_categories?: number[];
  action_days?: number;
  action_scene?: QianchuanAdDetailGetV10DataAudienceActionScene[];
  action_words?: number[];
  age?: QianchuanAdDetailGetV10DataAudienceAge[];
  audience_mode?: QianchuanAdDetailGetV10DataAudienceAudienceMode;
  auto_extend_enabled?: number;
  auto_extend_targets?: QianchuanAdDetailGetV10DataAudienceAutoExtendTargets[];
  aweme_fan_accounts?: number[];
  aweme_fan_behaviors?: QianchuanAdDetailGetV10DataAudienceAwemeFanBehaviors[];
  aweme_fan_behaviors_days?: QianchuanAdDetailGetV10DataAudienceAwemeFanBehaviorsDays;
  aweme_fan_categories?: number[];
  city?: number[];
  district?: QianchuanAdDetailGetV10DataAudienceDistrict;
  district_type?: boolean;
  electric_fence_region?: QianchuanAdDetailGetV10DataAudienceElectricFenceRegion;
  exclude_limited_region?: number;
  gender?: QianchuanAdDetailGetV10DataAudienceGender;
  inactive_retargeting_tags?: QianchuanAdDetailGetV10ResponseDataAudienceInactiveRetargetingTagsInner[];
  interest_categories?: number[];
  interest_words?: number[];
  live_platform_tags?: string[];
  location_type?: QianchuanAdDetailGetV10DataAudienceLocationType;
  new_customer?: QianchuanAdDetailGetV10DataAudienceNewCustomer;
  orientation_id?: number;
  platform?: QianchuanAdDetailGetV10DataAudiencePlatform[];
  region_version?: string;
  retargeting_tags_exclude?: number[];
  retargeting_tags_include?: number[];
  search_extended?: QianchuanAdDetailGetV10DataAudienceSearchExtended;
  smart_interest_action?: QianchuanAdDetailGetV10DataAudienceSmartInterestAction;
}

