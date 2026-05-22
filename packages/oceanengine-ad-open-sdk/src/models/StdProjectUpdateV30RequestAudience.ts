// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StdProjectUpdateV30AudienceAge, StdProjectUpdateV30AudienceAndroidOsv, StdProjectUpdateV30AudienceAutoExtendTargets, StdProjectUpdateV30AudienceCarrierRegionOptimize, StdProjectUpdateV30AudienceConvertedTimeDuration, StdProjectUpdateV30AudienceDistrict, StdProjectUpdateV30AudienceFilterEvent, StdProjectUpdateV30AudienceGender, StdProjectUpdateV30AudienceHarmonyOsv, StdProjectUpdateV30AudienceHideIfConverted, StdProjectUpdateV30AudienceHideIfExists, StdProjectUpdateV30AudienceIosOsv, StdProjectUpdateV30AudienceLocationType, StdProjectUpdateV30AudiencePlatform, StdProjectUpdateV30AudienceRegionRecommend, StdProjectUpdateV30AudienceSmartExtend, StdProjectUpdateV30RequestAudienceGeolocationInner } from "../models";

export interface StdProjectUpdateV30RequestAudience {
  age?: StdProjectUpdateV30AudienceAge[];
  android_osv?: StdProjectUpdateV30AudienceAndroidOsv;
  auto_extend_targets?: StdProjectUpdateV30AudienceAutoExtendTargets[];
  carrier_region_optimize?: StdProjectUpdateV30AudienceCarrierRegionOptimize;
  city?: number[];
  converted_time_duration?: StdProjectUpdateV30AudienceConvertedTimeDuration;
  district?: StdProjectUpdateV30AudienceDistrict;
  filter_event?: StdProjectUpdateV30AudienceFilterEvent[];
  gender?: StdProjectUpdateV30AudienceGender;
  geolocation?: StdProjectUpdateV30RequestAudienceGeolocationInner[];
  harmony_osv?: StdProjectUpdateV30AudienceHarmonyOsv;
  hide_if_converted?: StdProjectUpdateV30AudienceHideIfConverted;
  hide_if_exists?: StdProjectUpdateV30AudienceHideIfExists;
  ios_osv?: StdProjectUpdateV30AudienceIosOsv;
  location_type?: StdProjectUpdateV30AudienceLocationType;
  platform?: StdProjectUpdateV30AudiencePlatform[];
  region_recommend?: StdProjectUpdateV30AudienceRegionRecommend;
  region_version?: string;
  retargeting_tags_exclude?: number[];
  retargeting_tags_include?: number[];
  smart_extend?: StdProjectUpdateV30AudienceSmartExtend;
}

