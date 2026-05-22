// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ProjectCreateV30AudienceAc, ProjectCreateV30AudienceAndroidOsv, ProjectCreateV30AudienceAutoExtendTargets, ProjectCreateV30AudienceAwemeFanBehaviors, ProjectCreateV30AudienceAwemeFanTimeScope, ProjectCreateV30AudienceCarrier, ProjectCreateV30AudienceCarrierRegionOptimize, ProjectCreateV30AudienceConvertedTimeDuration, ProjectCreateV30AudienceDeviceBrand, ProjectCreateV30AudienceDeviceType, ProjectCreateV30AudienceDistrict, ProjectCreateV30AudienceDpaCity, ProjectCreateV30AudienceDpaLbs, ProjectCreateV30AudienceDpaRtaRecommendType, ProjectCreateV30AudienceDpaRtaSwitch, ProjectCreateV30AudienceFilterAwemeAbnormalActive, ProjectCreateV30AudienceFilterAwemeFansCount, ProjectCreateV30AudienceFilterEvent, ProjectCreateV30AudienceFilterOwnAwemeFans, ProjectCreateV30AudienceGender, ProjectCreateV30AudienceHarmonyOsv, ProjectCreateV30AudienceHideIfConverted, ProjectCreateV30AudienceHideIfExists, ProjectCreateV30AudienceInterestActionMode, ProjectCreateV30AudienceIosOsv, ProjectCreateV30AudienceLocationType, ProjectCreateV30AudiencePlatform, ProjectCreateV30AudienceRegionRecommend, ProjectCreateV30AudienceSmartExtend, ProjectCreateV30AudienceSuperiorPopularityType, ProjectCreateV30RequestAudienceGeolocationInner } from "../models";

export interface ProjectCreateV30RequestAudience {
  ac?: ProjectCreateV30AudienceAc[];
  action_categories?: number[];
  action_days?: number;
  action_words?: number[];
  age?: string[];
  android_osv?: ProjectCreateV30AudienceAndroidOsv;
  audience_package_id?: number;
  auto_extend_targets?: ProjectCreateV30AudienceAutoExtendTargets[];
  aweme_fan_accounts?: number[];
  aweme_fan_behaviors?: ProjectCreateV30AudienceAwemeFanBehaviors[];
  aweme_fan_categories?: number[];
  aweme_fan_time_scope?: ProjectCreateV30AudienceAwemeFanTimeScope;
  carrier?: ProjectCreateV30AudienceCarrier[];
  carrier_region_optimize?: ProjectCreateV30AudienceCarrierRegionOptimize;
  city?: number[];
  converted_time_duration?: ProjectCreateV30AudienceConvertedTimeDuration;
  device_brand?: ProjectCreateV30AudienceDeviceBrand[];
  device_type?: ProjectCreateV30AudienceDeviceType[];
  district?: ProjectCreateV30AudienceDistrict;
  dpa_city?: ProjectCreateV30AudienceDpaCity;
  dpa_lbs?: ProjectCreateV30AudienceDpaLbs;
  dpa_rta_recommend_type?: ProjectCreateV30AudienceDpaRtaRecommendType;
  dpa_rta_switch?: ProjectCreateV30AudienceDpaRtaSwitch;
  exclude_flow_package?: number[];
  filter_aweme_abnormal_active?: ProjectCreateV30AudienceFilterAwemeAbnormalActive;
  filter_aweme_fans_count?: ProjectCreateV30AudienceFilterAwemeFansCount;
  filter_event?: ProjectCreateV30AudienceFilterEvent[];
  filter_own_aweme_fans?: ProjectCreateV30AudienceFilterOwnAwemeFans;
  flow_package?: number[];
  gender?: ProjectCreateV30AudienceGender;
  geolocation?: ProjectCreateV30RequestAudienceGeolocationInner[];
  harmony_osv?: ProjectCreateV30AudienceHarmonyOsv;
  hide_if_converted?: ProjectCreateV30AudienceHideIfConverted;
  hide_if_exists?: ProjectCreateV30AudienceHideIfExists;
  interest_action_mode?: ProjectCreateV30AudienceInterestActionMode;
  interest_categories?: number[];
  interest_words?: number[];
  ios_osv?: ProjectCreateV30AudienceIosOsv;
  launch_price?: number[];
  location_type?: ProjectCreateV30AudienceLocationType;
  platform?: ProjectCreateV30AudiencePlatform[];
  region_recommend?: ProjectCreateV30AudienceRegionRecommend;
  region_version?: string;
  retargeting_tags_exclude?: number[];
  retargeting_tags_include?: number[];
  rta_id?: number;
  smart_extend?: ProjectCreateV30AudienceSmartExtend;
  superior_popularity_type?: ProjectCreateV30AudienceSuperiorPopularityType;
}

