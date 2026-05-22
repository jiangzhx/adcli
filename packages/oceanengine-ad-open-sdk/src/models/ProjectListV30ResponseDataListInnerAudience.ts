// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ProjectListV30DataListAudienceAc, ProjectListV30DataListAudienceActionScene, ProjectListV30DataListAudienceActivateType, ProjectListV30DataListAudienceAndroidOsv, ProjectListV30DataListAudienceAutoExtendTargets, ProjectListV30DataListAudienceAwemeFanBehaviors, ProjectListV30DataListAudienceAwemeFanTimeScope, ProjectListV30DataListAudienceCareer, ProjectListV30DataListAudienceCarrier, ProjectListV30DataListAudienceCarrierRegionOptimize, ProjectListV30DataListAudienceConvertedTimeDuration, ProjectListV30DataListAudienceDeviceBrand, ProjectListV30DataListAudienceDeviceType, ProjectListV30DataListAudienceDistrict, ProjectListV30DataListAudienceDpaCity, ProjectListV30DataListAudienceDpaLbs, ProjectListV30DataListAudienceDpaRtaRecommendType, ProjectListV30DataListAudienceDpaRtaSwitch, ProjectListV30DataListAudienceFilterAwemeAbnormalActive, ProjectListV30DataListAudienceFilterAwemeFansCount, ProjectListV30DataListAudienceFilterEvent, ProjectListV30DataListAudienceFilterOwnAwemeFans, ProjectListV30DataListAudienceGender, ProjectListV30DataListAudienceHarmonyOsv, ProjectListV30DataListAudienceHideIfConverted, ProjectListV30DataListAudienceHideIfExists, ProjectListV30DataListAudienceInterestActionMode, ProjectListV30DataListAudienceIosOsv, ProjectListV30DataListAudienceLocationType, ProjectListV30DataListAudiencePlatform, ProjectListV30DataListAudienceSmartExtend, ProjectListV30DataListAudienceSuperiorPopularityType, ProjectListV30ResponseDataListInnerAudienceGeolocationInner } from "../models";

export interface ProjectListV30ResponseDataListInnerAudience {
  ac?: ProjectListV30DataListAudienceAc[];
  action_categories?: number[];
  action_days?: number;
  action_scene?: ProjectListV30DataListAudienceActionScene[];
  action_words?: number[];
  activate_type?: ProjectListV30DataListAudienceActivateType[];
  age?: string[];
  android_osv?: ProjectListV30DataListAudienceAndroidOsv;
  audience_package_id?: number;
  auto_extend_targets?: ProjectListV30DataListAudienceAutoExtendTargets[];
  aweme_fan_accounts?: number[];
  aweme_fan_behaviors?: ProjectListV30DataListAudienceAwemeFanBehaviors[];
  aweme_fan_categories?: number[];
  aweme_fan_time_scope?: ProjectListV30DataListAudienceAwemeFanTimeScope;
  career?: ProjectListV30DataListAudienceCareer[];
  carrier?: ProjectListV30DataListAudienceCarrier[];
  carrier_region_optimize?: ProjectListV30DataListAudienceCarrierRegionOptimize;
  city?: number[];
  converted_time_duration?: ProjectListV30DataListAudienceConvertedTimeDuration;
  device_brand?: ProjectListV30DataListAudienceDeviceBrand[];
  device_type?: ProjectListV30DataListAudienceDeviceType[];
  district?: ProjectListV30DataListAudienceDistrict;
  dpa_city?: ProjectListV30DataListAudienceDpaCity;
  dpa_lbs?: ProjectListV30DataListAudienceDpaLbs;
  dpa_rta_recommend_type?: ProjectListV30DataListAudienceDpaRtaRecommendType;
  dpa_rta_switch?: ProjectListV30DataListAudienceDpaRtaSwitch;
  exclude_flow_package?: number[];
  filter_aweme_abnormal_active?: ProjectListV30DataListAudienceFilterAwemeAbnormalActive;
  filter_aweme_fans_count?: ProjectListV30DataListAudienceFilterAwemeFansCount;
  filter_event?: ProjectListV30DataListAudienceFilterEvent[];
  filter_own_aweme_fans?: ProjectListV30DataListAudienceFilterOwnAwemeFans;
  flow_package?: number[];
  gender?: ProjectListV30DataListAudienceGender;
  geolocation?: ProjectListV30ResponseDataListInnerAudienceGeolocationInner[];
  harmony_osv?: ProjectListV30DataListAudienceHarmonyOsv;
  hide_if_converted?: ProjectListV30DataListAudienceHideIfConverted;
  hide_if_exists?: ProjectListV30DataListAudienceHideIfExists;
  interest_action_mode?: ProjectListV30DataListAudienceInterestActionMode;
  interest_categories?: number[];
  interest_words?: number[];
  ios_osv?: ProjectListV30DataListAudienceIosOsv;
  launch_price?: number[];
  location_type?: ProjectListV30DataListAudienceLocationType;
  platform?: ProjectListV30DataListAudiencePlatform[];
  region_recommend?: string;
  region_version?: string;
  retargeting_tags_exclude?: number[];
  retargeting_tags_include?: number[];
  smart_extend?: ProjectListV30DataListAudienceSmartExtend;
  superior_popularity_type?: ProjectListV30DataListAudienceSuperiorPopularityType;
}

