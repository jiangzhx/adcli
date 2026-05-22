// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanOrientationPackageGetV10DataListAc, QianchuanOrientationPackageGetV10DataListActionScene, QianchuanOrientationPackageGetV10DataListAge, QianchuanOrientationPackageGetV10DataListAutoExtendTargets, QianchuanOrientationPackageGetV10DataListAwemeFanBehaviors, QianchuanOrientationPackageGetV10DataListAwemeFanBehaviorsDays, QianchuanOrientationPackageGetV10DataListDistrict, QianchuanOrientationPackageGetV10DataListElectricFenceRegion, QianchuanOrientationPackageGetV10DataListGender, QianchuanOrientationPackageGetV10DataListLocationType, QianchuanOrientationPackageGetV10DataListNewCustomer, QianchuanOrientationPackageGetV10DataListPlatform, QianchuanOrientationPackageGetV10DataListSmartInterestAction, QianchuanOrientationPackageGetV10ResponseDataListInnerInActiveRetargetingTagsInner } from "../models";

export interface QianchuanOrientationPackageGetV10ResponseDataListInner {
  InActive_retargeting_tags?: QianchuanOrientationPackageGetV10ResponseDataListInnerInActiveRetargetingTagsInner[];
  ac?: QianchuanOrientationPackageGetV10DataListAc[];
  action_categories?: number[];
  action_days?: number;
  action_scene?: QianchuanOrientationPackageGetV10DataListActionScene[];
  action_words?: number[];
  ad_num?: number;
  age?: QianchuanOrientationPackageGetV10DataListAge[];
  auto_extend_enabled?: number;
  auto_extend_targets?: QianchuanOrientationPackageGetV10DataListAutoExtendTargets[];
  aweme_fan_accounts?: number[];
  aweme_fan_behaviors?: QianchuanOrientationPackageGetV10DataListAwemeFanBehaviors[];
  aweme_fan_behaviors_days?: QianchuanOrientationPackageGetV10DataListAwemeFanBehaviorsDays;
  aweme_fan_categories?: number[];
  city?: number[];
  district?: QianchuanOrientationPackageGetV10DataListDistrict;
  electric_fence_region?: QianchuanOrientationPackageGetV10DataListElectricFenceRegion;
  gender?: QianchuanOrientationPackageGetV10DataListGender;
  interest_categories?: number[];
  interest_words?: number[];
  live_platform_tags?: string[];
  location_type?: QianchuanOrientationPackageGetV10DataListLocationType;
  new_customer?: QianchuanOrientationPackageGetV10DataListNewCustomer;
  orientation_id: number;
  orientation_info?: string;
  orientation_name: string;
  platform?: QianchuanOrientationPackageGetV10DataListPlatform[];
  region_version?: string;
  retargeting_tags_exclude?: number[];
  retargeting_tags_include?: number[];
  smart_interest_action?: QianchuanOrientationPackageGetV10DataListSmartInterestAction;
}

