// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ProjectUpdateV30AudienceAc, ProjectUpdateV30AudienceActionScene, ProjectUpdateV30AudienceAndroidOsv, ProjectUpdateV30AudienceAutoExtendTargets, ProjectUpdateV30AudienceAwemeFanBehaviors, ProjectUpdateV30AudienceAwemeFanTimeScope, ProjectUpdateV30AudienceCarrier, ProjectUpdateV30AudienceCarrierRegionOptimize, ProjectUpdateV30AudienceConvertedTimeDuration, ProjectUpdateV30AudienceDeviceBrand, ProjectUpdateV30AudienceDeviceType, ProjectUpdateV30AudienceDistrict, ProjectUpdateV30AudienceDpaCity, ProjectUpdateV30AudienceDpaLbs, ProjectUpdateV30AudienceFilterAwemeAbnormalActive, ProjectUpdateV30AudienceFilterAwemeFansCount, ProjectUpdateV30AudienceFilterEvent, ProjectUpdateV30AudienceFilterOwnAwemeFans, ProjectUpdateV30AudienceGender, ProjectUpdateV30AudienceHarmonyOsv, ProjectUpdateV30AudienceHideIfConverted, ProjectUpdateV30AudienceHideIfExists, ProjectUpdateV30AudienceInterestActionMode, ProjectUpdateV30AudienceIosOsv, ProjectUpdateV30AudienceLocationType, ProjectUpdateV30AudiencePlatform, ProjectUpdateV30AudienceRegionRecommend, ProjectUpdateV30AudienceSmartExtend, ProjectUpdateV30AudienceSuperiorPopularityType, ProjectUpdateV30RequestAudienceGeolocationInner } from "../models";

export interface ProjectUpdateV30RequestAudience {
  ac?: ProjectUpdateV30AudienceAc[];
  action_categories?: number[];
  action_days?: number;
  action_scene?: ProjectUpdateV30AudienceActionScene[];
  action_words?: number[];
  age?: string[];
  android_osv?: ProjectUpdateV30AudienceAndroidOsv;
  audience_package_id?: number | string;
  auto_extend_targets?: ProjectUpdateV30AudienceAutoExtendTargets[];
  aweme_fan_accounts?: number[];
  aweme_fan_behaviors?: ProjectUpdateV30AudienceAwemeFanBehaviors[];
  aweme_fan_categories?: number[];
  aweme_fan_time_scope?: ProjectUpdateV30AudienceAwemeFanTimeScope;
  carrier?: ProjectUpdateV30AudienceCarrier[];
  carrier_region_optimize?: ProjectUpdateV30AudienceCarrierRegionOptimize;
  city?: number[];
  converted_time_duration?: ProjectUpdateV30AudienceConvertedTimeDuration;
  device_brand?: ProjectUpdateV30AudienceDeviceBrand[];
  device_type?: ProjectUpdateV30AudienceDeviceType[];
  district?: ProjectUpdateV30AudienceDistrict;
  dpa_city?: ProjectUpdateV30AudienceDpaCity;
  dpa_lbs?: ProjectUpdateV30AudienceDpaLbs;
  exclude_flow_package?: number[];
  filter_aweme_abnormal_active?: ProjectUpdateV30AudienceFilterAwemeAbnormalActive;
  filter_aweme_fans_count?: ProjectUpdateV30AudienceFilterAwemeFansCount;
  filter_event?: ProjectUpdateV30AudienceFilterEvent[];
  filter_own_aweme_fans?: ProjectUpdateV30AudienceFilterOwnAwemeFans;
  flow_package?: number[];
  gender?: ProjectUpdateV30AudienceGender;
  geolocation?: ProjectUpdateV30RequestAudienceGeolocationInner[];
  harmony_osv?: ProjectUpdateV30AudienceHarmonyOsv;
  hide_if_converted?: ProjectUpdateV30AudienceHideIfConverted;
  hide_if_exists?: ProjectUpdateV30AudienceHideIfExists;
  interest_action_mode?: ProjectUpdateV30AudienceInterestActionMode;
  interest_categories?: number[];
  interest_words?: number[];
  ios_osv?: ProjectUpdateV30AudienceIosOsv;
  launch_price?: number[];
  location_type?: ProjectUpdateV30AudienceLocationType;
  platform?: ProjectUpdateV30AudiencePlatform[];
  region_recommend?: ProjectUpdateV30AudienceRegionRecommend;
  region_version?: string;
  retargeting_tags_exclude?: number[];
  retargeting_tags_include?: number[];
  smart_extend?: ProjectUpdateV30AudienceSmartExtend;
  superior_popularity_type?: ProjectUpdateV30AudienceSuperiorPopularityType;
}

