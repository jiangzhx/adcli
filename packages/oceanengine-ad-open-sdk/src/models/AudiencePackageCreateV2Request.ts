// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AudiencePackageCreateV2Ac, AudiencePackageCreateV2ActionDays, AudiencePackageCreateV2AdType, AudiencePackageCreateV2Age, AudiencePackageCreateV2AndroidOsv, AudiencePackageCreateV2AutoExtendTargets, AudiencePackageCreateV2AwemeFanBehaviors, AudiencePackageCreateV2AwemeFanTimeScope, AudiencePackageCreateV2Carrier, AudiencePackageCreateV2CarrierRegionOptimize, AudiencePackageCreateV2ConvertedTimeDuration, AudiencePackageCreateV2DeliveryRange, AudiencePackageCreateV2DeviceBrand, AudiencePackageCreateV2DeviceType, AudiencePackageCreateV2District, AudiencePackageCreateV2FilterAwemeAbnormalActive, AudiencePackageCreateV2FilterEvent, AudiencePackageCreateV2FilterOwnAwemeFans, AudiencePackageCreateV2Gender, AudiencePackageCreateV2HarmonyOsv, AudiencePackageCreateV2HideIfConverted, AudiencePackageCreateV2HideIfExists, AudiencePackageCreateV2InterestActionMode, AudiencePackageCreateV2IosOsv, AudiencePackageCreateV2LandingType, AudiencePackageCreateV2LocationType, AudiencePackageCreateV2MarketingGoal, AudiencePackageCreateV2Platform, AudiencePackageCreateV2RequestGeolocationInner, AudiencePackageCreateV2SmartExtend, AudiencePackageCreateV2SuperiorPopularityType } from "../models";

export interface AudiencePackageCreateV2Request {
  ac?: AudiencePackageCreateV2Ac[];
  action_categories?: number[];
  action_days?: AudiencePackageCreateV2ActionDays;
  action_words?: number[];
  ad_type?: AudiencePackageCreateV2AdType;
  advertiser_id: number;
  age?: AudiencePackageCreateV2Age[];
  android_osv?: AudiencePackageCreateV2AndroidOsv;
  auto_extend_targets?: AudiencePackageCreateV2AutoExtendTargets[];
  aweme_fan_accounts?: number[];
  aweme_fan_behaviors?: AudiencePackageCreateV2AwemeFanBehaviors[];
  aweme_fan_categories?: number[];
  aweme_fan_time_scope?: AudiencePackageCreateV2AwemeFanTimeScope;
  aweme_fans_numbers?: number[];
  business_ids?: number[];
  carrier?: AudiencePackageCreateV2Carrier[];
  carrier_region_optimize?: AudiencePackageCreateV2CarrierRegionOptimize;
  city?: number[];
  converted_time_duration?: AudiencePackageCreateV2ConvertedTimeDuration;
  delivery_range?: AudiencePackageCreateV2DeliveryRange;
  description: string;
  device_brand?: AudiencePackageCreateV2DeviceBrand[];
  device_type?: AudiencePackageCreateV2DeviceType[];
  district?: AudiencePackageCreateV2District;
  exclude_flow_package?: number[];
  filter_aweme_abnormal_active?: AudiencePackageCreateV2FilterAwemeAbnormalActive;
  filter_aweme_fans_count?: number;
  filter_event?: AudiencePackageCreateV2FilterEvent[];
  filter_own_aweme_fans?: AudiencePackageCreateV2FilterOwnAwemeFans;
  flow_package?: number[];
  gender?: AudiencePackageCreateV2Gender;
  geolocation?: AudiencePackageCreateV2RequestGeolocationInner[];
  harmony_osv?: AudiencePackageCreateV2HarmonyOsv;
  hide_if_converted?: AudiencePackageCreateV2HideIfConverted;
  hide_if_exists?: AudiencePackageCreateV2HideIfExists;
  interest_action_mode?: AudiencePackageCreateV2InterestActionMode;
  interest_categories?: number[];
  interest_words?: number[];
  ios_osv?: AudiencePackageCreateV2IosOsv;
  landing_type: AudiencePackageCreateV2LandingType;
  launch_price?: number[];
  location_type?: AudiencePackageCreateV2LocationType;
  marketing_goal?: AudiencePackageCreateV2MarketingGoal;
  name: string;
  platform?: AudiencePackageCreateV2Platform[];
  region_version?: string;
  retargeting_tags?: number[];
  retargeting_tags_exclude?: number[];
  smart_extend?: AudiencePackageCreateV2SmartExtend;
  superior_popularity_type?: AudiencePackageCreateV2SuperiorPopularityType;
}

