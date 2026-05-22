// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AudiencePackageGetV30DataAudiencePackagesAc, AudiencePackageGetV30DataAudiencePackagesAdType, AudiencePackageGetV30DataAudiencePackagesAge, AudiencePackageGetV30DataAudiencePackagesAndroidOsv, AudiencePackageGetV30DataAudiencePackagesAutoExtendTargets, AudiencePackageGetV30DataAudiencePackagesAwemeFanBehaviors, AudiencePackageGetV30DataAudiencePackagesAwemeFanTimeScope, AudiencePackageGetV30DataAudiencePackagesCarrier, AudiencePackageGetV30DataAudiencePackagesCarrierRegionOptimize, AudiencePackageGetV30DataAudiencePackagesConvertedTimeDuration, AudiencePackageGetV30DataAudiencePackagesDeliveryRange, AudiencePackageGetV30DataAudiencePackagesDeviceBrand, AudiencePackageGetV30DataAudiencePackagesDeviceType, AudiencePackageGetV30DataAudiencePackagesDistrict, AudiencePackageGetV30DataAudiencePackagesFilterAwemeAbnormalActive, AudiencePackageGetV30DataAudiencePackagesFilterAwemeFansCount, AudiencePackageGetV30DataAudiencePackagesFilterEvent, AudiencePackageGetV30DataAudiencePackagesGender, AudiencePackageGetV30DataAudiencePackagesHarmonyOsv, AudiencePackageGetV30DataAudiencePackagesHideIfConverted, AudiencePackageGetV30DataAudiencePackagesHideIfExists, AudiencePackageGetV30DataAudiencePackagesInterestActionMode, AudiencePackageGetV30DataAudiencePackagesIosOsv, AudiencePackageGetV30DataAudiencePackagesLandingType, AudiencePackageGetV30DataAudiencePackagesLocationType, AudiencePackageGetV30DataAudiencePackagesMarketingGoal, AudiencePackageGetV30DataAudiencePackagesPlatform, AudiencePackageGetV30DataAudiencePackagesSmartExtend, AudiencePackageGetV30DataAudiencePackagesSuperiorPopularityType, AudiencePackageGetV30ResponseDataAudiencePackagesInnerGeolocationInner } from "../models";

export interface AudiencePackageGetV30ResponseDataAudiencePackagesInner {
  ac?: AudiencePackageGetV30DataAudiencePackagesAc[];
  action_categories?: number[];
  action_days?: number;
  action_words?: number[];
  ad_type?: AudiencePackageGetV30DataAudiencePackagesAdType;
  advertiser_id?: number | string;
  age?: AudiencePackageGetV30DataAudiencePackagesAge[];
  android_osv?: AudiencePackageGetV30DataAudiencePackagesAndroidOsv;
  audience_package_id?: number | string;
  auto_extend_targets?: AudiencePackageGetV30DataAudiencePackagesAutoExtendTargets[];
  aweme_fan_accounts?: string[];
  aweme_fan_behaviors?: AudiencePackageGetV30DataAudiencePackagesAwemeFanBehaviors[];
  aweme_fan_categories?: string[];
  aweme_fan_time_scope?: AudiencePackageGetV30DataAudiencePackagesAwemeFanTimeScope;
  aweme_fans_numbers?: number[];
  carrier?: AudiencePackageGetV30DataAudiencePackagesCarrier[];
  carrier_region_optimize?: AudiencePackageGetV30DataAudiencePackagesCarrierRegionOptimize;
  city?: number[];
  converted_time_duration?: AudiencePackageGetV30DataAudiencePackagesConvertedTimeDuration;
  delivery_range?: AudiencePackageGetV30DataAudiencePackagesDeliveryRange;
  description?: string;
  device_brand?: AudiencePackageGetV30DataAudiencePackagesDeviceBrand[];
  device_type?: AudiencePackageGetV30DataAudiencePackagesDeviceType[];
  district?: AudiencePackageGetV30DataAudiencePackagesDistrict;
  exclude_flow_package?: number[];
  filter_aweme_abnormal_active?: AudiencePackageGetV30DataAudiencePackagesFilterAwemeAbnormalActive;
  filter_aweme_fans_count?: AudiencePackageGetV30DataAudiencePackagesFilterAwemeFansCount;
  filter_event?: AudiencePackageGetV30DataAudiencePackagesFilterEvent[];
  filter_own_aweme_fans?: number;
  flow_package?: number[];
  gender?: AudiencePackageGetV30DataAudiencePackagesGender;
  geolocation?: AudiencePackageGetV30ResponseDataAudiencePackagesInnerGeolocationInner[];
  harmony_osv?: AudiencePackageGetV30DataAudiencePackagesHarmonyOsv;
  hide_if_converted?: AudiencePackageGetV30DataAudiencePackagesHideIfConverted;
  hide_if_exists?: AudiencePackageGetV30DataAudiencePackagesHideIfExists;
  interest_action_mode?: AudiencePackageGetV30DataAudiencePackagesInterestActionMode;
  interest_categories?: number[];
  interest_words?: number[];
  ios_osv?: AudiencePackageGetV30DataAudiencePackagesIosOsv;
  landing_type?: AudiencePackageGetV30DataAudiencePackagesLandingType;
  launch_price?: number[];
  location_type?: AudiencePackageGetV30DataAudiencePackagesLocationType;
  marketing_goal?: AudiencePackageGetV30DataAudiencePackagesMarketingGoal;
  name?: string;
  platform?: AudiencePackageGetV30DataAudiencePackagesPlatform[];
  region_version?: string;
  retargeting_tags_exclude?: number[];
  retargeting_tags_include?: number[];
  smart_extend?: AudiencePackageGetV30DataAudiencePackagesSmartExtend;
  superior_popularity_type?: AudiencePackageGetV30DataAudiencePackagesSuperiorPopularityType;
}

