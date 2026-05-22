// Generated from oceanengine/ad_open_sdk_go models/model_audience_package_update_v2_request.go
// Do not edit manually.

import type { AudiencePackageUpdateV2Ac, AudiencePackageUpdateV2ActionDays, AudiencePackageUpdateV2Age, AudiencePackageUpdateV2AndroidOsv, AudiencePackageUpdateV2AutoExtendTargets, AudiencePackageUpdateV2AwemeFanBehaviors, AudiencePackageUpdateV2AwemeFanTimeScope, AudiencePackageUpdateV2Carrier, AudiencePackageUpdateV2CarrierRegionOptimize, AudiencePackageUpdateV2ConvertedTimeDuration, AudiencePackageUpdateV2DeviceBrand, AudiencePackageUpdateV2DeviceType, AudiencePackageUpdateV2District, AudiencePackageUpdateV2FilterAwemeAbnormalActive, AudiencePackageUpdateV2FilterEvent, AudiencePackageUpdateV2FilterOwnAwemeFans, AudiencePackageUpdateV2Gender, AudiencePackageUpdateV2HarmonyOsv, AudiencePackageUpdateV2HideIfConverted, AudiencePackageUpdateV2HideIfExists, AudiencePackageUpdateV2InterestActionMode, AudiencePackageUpdateV2IosOsv, AudiencePackageUpdateV2LocationType, AudiencePackageUpdateV2Platform, AudiencePackageUpdateV2RequestGeolocationInner, AudiencePackageUpdateV2SmartExtend, AudiencePackageUpdateV2SuperiorPopularityType } from "../models/index";

export interface AudiencePackageUpdateV2Request {
  ac?: AudiencePackageUpdateV2Ac[];
  action_categories?: number[];
  action_days?: AudiencePackageUpdateV2ActionDays;
  action_words?: number[];
  advertiser_id: number | string;
  age?: AudiencePackageUpdateV2Age[];
  android_osv?: AudiencePackageUpdateV2AndroidOsv;
  audience_package_id: number | string;
  auto_extend_targets?: AudiencePackageUpdateV2AutoExtendTargets[];
  aweme_fan_accounts?: number[];
  aweme_fan_behaviors?: AudiencePackageUpdateV2AwemeFanBehaviors[];
  aweme_fan_categories?: number[];
  aweme_fan_time_scope?: AudiencePackageUpdateV2AwemeFanTimeScope;
  aweme_fans_numbers?: number[];
  business_ids?: number | string[];
  carrier?: AudiencePackageUpdateV2Carrier[];
  carrier_region_optimize?: AudiencePackageUpdateV2CarrierRegionOptimize;
  city?: number[];
  converted_time_duration?: AudiencePackageUpdateV2ConvertedTimeDuration;
  description?: string;
  device_brand?: AudiencePackageUpdateV2DeviceBrand[];
  device_type?: AudiencePackageUpdateV2DeviceType[];
  district?: AudiencePackageUpdateV2District;
  exclude_flow_package?: number[];
  filter_aweme_abnormal_active?: AudiencePackageUpdateV2FilterAwemeAbnormalActive;
  filter_aweme_fans_count?: number;
  filter_event?: AudiencePackageUpdateV2FilterEvent[];
  filter_own_aweme_fans?: AudiencePackageUpdateV2FilterOwnAwemeFans;
  flow_package?: number[];
  gender?: AudiencePackageUpdateV2Gender;
  geolocation?: AudiencePackageUpdateV2RequestGeolocationInner[];
  harmony_osv?: AudiencePackageUpdateV2HarmonyOsv;
  hide_if_converted?: AudiencePackageUpdateV2HideIfConverted;
  hide_if_exists?: AudiencePackageUpdateV2HideIfExists;
  interest_action_mode?: AudiencePackageUpdateV2InterestActionMode;
  interest_categories?: number[];
  interest_words?: number[];
  ios_osv?: AudiencePackageUpdateV2IosOsv;
  launch_price?: number[];
  location_type?: AudiencePackageUpdateV2LocationType;
  name?: string;
  platform?: AudiencePackageUpdateV2Platform[];
  region_version?: string;
  retargeting_tags?: number[];
  retargeting_tags_exclude?: number[];
  smart_extend?: AudiencePackageUpdateV2SmartExtend;
  superior_popularity_type?: AudiencePackageUpdateV2SuperiorPopularityType;
}

